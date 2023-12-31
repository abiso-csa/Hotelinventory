import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { BookingService } from './booking.service';
import { mergeMap, switchMap } from 'rxjs';
import { CustomValidator } from './validators/custom-validator';
import { ActivatedRoute } from '@angular/router';
import { group } from '@angular/animations';

@Component({
  selector: 'hinv-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  bookingForm!: FormGroup;
  get guests() { return this.bookingForm.get('guests') as FormArray; }

  constructor(private configService: ConfigService,
    private fb: FormBuilder, private bookingService: BookingService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const roomId=this.route.snapshot.paramMap.get('roomId');
    this.bookingForm = this.fb.group({
      roomId: new FormControl({ value: roomId, disabled: true }, { validators: [Validators.required] }),
      guestEmail: ['', { updateOn: 'blur', validators: [Validators.required, Validators.email] }],
      checkinDate: [''],
      checkoutDate: [''],
      bookingStatus: [''],
      bookingAmount: [''],
      bookingDate: [''],
      mobileNumber: ['', { updateOn: 'blur' }],
      guestName: ['', [Validators.required, Validators.minLength(5), CustomValidator.ValidateName,
      CustomValidator.Validatespecialchar('*')]],
      address: this.fb.group({
        AddressLine1: ['', { validators: [Validators.required] }],
        AddressLine2: [''],
        City: ['', { validators: [Validators.required] }],
        State: ['', { validators: [Validators.required] }],
        Country: [''],
        ZipCode: [''],

      }),
      guests: this.fb.array([this.addGuestControl()]),
      tnc: new FormControl(false, { validators: [Validators.requiredTrue] }),
    },
{updateOn:'blur',Validators:[CustomValidator.valiadatedate]}
    );

     this.getBookingData();
    // //    this.bookingForm.valueChanges.subscribe((data)=>{
    // // this.bookingService.bookRoom(data).subscribe((data)=>{})
    //    });
    this.bookingForm.valueChanges.pipe(
      switchMap((data) => this.bookingService.bookRoom(data))
    ).subscribe((data) => console.log(data));
  }
  addBooking() {
    console.log(this.bookingForm.getRawValue());
    //   this.bookingService.bookRoom(this.bookingForm.getRawValue()).subscribe((data)=> {console.log(data)})
    //   // // this.bookingForm.reset({

    //   // });
    this.bookingForm.reset({
      
      guestEmail: '',
      checkinDate: '',
      checkoutDate: '',
      bookingStatus: '',
      bookingAmount: '',
      bookingDate: '',
      mobileNumber: '',
      guestName: '',
      address: {
        AddressLine1: '',
        AddressLine2: '',
        City: '',
        State: '',
        Country: '',
        ZipCode: '',
      },
      guests: [],
      tnc: false,
    });

  }
  getBookingData() {
    this.bookingForm.patchValue({
      roomId: '2',
      guestEmail: 'test@gmail.com',
      checkinDate: new Date('10-july-2023'),
      checkoutDate: '',
      bookingStatus: '',
      bookingAmount: '',
      bookingDate: '',
      mobileNumber: '',
      guestName: '',
      address: {
        AddressLine1: '',
        AddressLine2: '',
        City: '',
        State: '',
        Country: '',
        ZipCode: '',
      },
      guests: [],
      tnc: false,
    })
  }
  addGuest() {
    this.guests.controls.push(this.addGuestControl());
  }
  addGuestControl() {
    return this.fb.group({
      guestName: ['', { validators: [Validators.required] }],
      age: new FormControl('',)
    });
  }
  addpassport() {
    this.bookingForm.addControl('passport', new FormControl(''));
  }
  deletepassport() {
    if (this.bookingForm.get('passport')) {
      this.bookingForm.removeControl('passport');
    }
  }
  removeGuest(i: number) {
    this.guests.removeAt(i)

  }
}


