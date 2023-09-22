export interface room{
    totalRooms:number;
    availableRooms:number;
    bookedRooms:number;
}

export interface RoomList{
    roomnumber?:string;
    roomType:string;
    amenities:string;
    price:number;
    photos:string;
    checkinTime:Date;
    checkoutTime:Date;
    rating:number;
}