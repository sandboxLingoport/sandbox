package com.lingoport;

import java.text.DateFormat;
import java.util.Date;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Greeter {

	public static void main(String[] args) {
		String greeting = "Hello World!";
		String goodbye = " Goodbye World.";
		String seeyou = "See you tomorrow.";

		DateFormat dateFormatter = DateFormat.getDateInstance(DateFormat.DEFAULT);
		String dateString = dateFormatter.format(new Date());
    String displayTime = "Current Time: " + dateString;

		System.out.println(greeting);
		System.out.println(displayTime);
		System.out.println(goodbye);
		System.out.println(seeyou);
	}
}
