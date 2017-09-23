package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.BookingsDTO;
import com.example.demo.model.Booking;
import com.example.demo.repository.BookingRepository;


@RestController
public class BookingsController {
	@Autowired
	BookingRepository bookingRepository;
	
	@RequestMapping(value="/allBookings",method=RequestMethod.GET)
	public BookingsDTO getAllBookings(){
		
		return new BookingsDTO(bookingRepository.findAll());
	}
	@RequestMapping(value="/example",method=RequestMethod.GET)
	public Booking getBookings(){
		Booking booking = new Booking();
		
		return booking;
	}
	@RequestMapping(value="/addBooking",method=RequestMethod.POST)
	public ResponseEntity<String> addBooking(@RequestBody Booking booking){
		if(booking!=null){
		bookingRepository.save(booking);
		return ResponseEntity.ok("Booking was saved");
		}
		else return (ResponseEntity<String>) ResponseEntity.badRequest();
	}
	
	@RequestMapping(value="/deleteBooking",method=RequestMethod.DELETE)
	public ResponseEntity<String> deleteBooking(@RequestBody Booking booking){
		if(booking!=null){
		bookingRepository.delete(booking);
		return ResponseEntity.ok("Booking was saved");
		}
		else return (ResponseEntity<String>) ResponseEntity.badRequest();
	}
	
}
