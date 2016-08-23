package com.lingoport.demo;

import java.text.DateFormat;
import java.util.Date;
import java.util.logging.Level;
import java.util.logging.Logger;

public class HelloWorld {
	
	public static void main(String[] args) {
		String greeting = "Hello";
		greeting += " World";
		String anothers = " Goodbye World"; 


		DateFormat dateFormatter = DateFormat.getDateInstance(DateFormat.DEFAULT);
		String dateString = dateFormatter.format(new Date());

		System.out.println(greeting);
		System.out.println(dateString);

		Logger logger = Logger.getLogger("Logger");
		String logMessage = "Logging message - Don't translate me.";
		logger.log(Level.INFO, logMessage);
	}
}
