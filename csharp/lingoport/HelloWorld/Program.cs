﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HelloWorld
{
    class Program
    {
        static void Main(string[] args)
        {
            String greeting = "Hello";
            greeting += " World2!";

            DateTime now = DateTime.Now;

            Console.WriteLine(greeting);
            Console.WriteLine(now.ToLongDateString());

            Demo demo = new Demo();
            demo.doSomething();
        }
    }
}
