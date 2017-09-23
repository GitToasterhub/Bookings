package com.example.demo.dto;

import java.util.List;

import com.example.demo.model.Booking;

public class BookingsDTO {
	List<Booking> bookings;
	
	public BookingsDTO(){
		
	}

    public BookingsDTO(List<Booking> bookings){
		this.bookings = bookings;
	}
	public List<Booking> getBookings() {
		return bookings;
	}

	public void setBookings(List<Booking> bookings) {
		this.bookings = bookings;
	}
	
	
}
