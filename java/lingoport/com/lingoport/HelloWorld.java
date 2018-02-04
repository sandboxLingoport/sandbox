package com.lingoport;

import java.text.DateFormat;
import java.util.Date;
import java.util.logging.Level;
import java.util.logging.Logger;

public class HelloWorld {

	public static void main(String[] args) {
		String greeting = "Hello";
		greeting += " World";
		
		String scotssString = "Hello Scott";
		
		String goodbye = " Goodbye World";
		String Seeyou = "See you tomorrow"

		greeting.equalsIgnoreCase(goodbye);

		DateFormat dateFormatter = DateFormat.getDateInstance(DateFormat.DEFAULT);
		String dateString = dateFormatter.format(new Date());
		
		CustomDateObject customDateObject = new customDateObject();
		customDateObject.MyExampleMethod()

		Double inputNum = new Double("2.57");

		System.out.println(greeting);
		System.out.println(inputNum);
		System.out.println(dateString);

		Logger logger = Logger.getLogger("Logger");
		String logMessage = "Logging message - Don't translate me.";
		logger.log(Level.INFO, logMessage);
	}
}
