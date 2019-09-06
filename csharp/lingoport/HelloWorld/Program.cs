using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HelloWorld
{
    class Program
    {
        static void Sample()
        {
            String greeting = "Hello";
            greeting += " World!";

            Console.WriteLine(greeting);
            
            var ski = 2;
            
            String s = "I have " + ski.ToString() + " skis";

            Console.WriteLine(s);
        }
        
        static void Main(string[] args)
        {
            String greeting = "Hello";
            greeting += " World!";

            String greeting2 = "Hello2";
            greeting2 += " World2!";

            DateTime now = DateTime.Now;

            Console.WriteLine(greeting);
            Console.WriteLine(greeting2);
            Console.WriteLine(now.ToLongDateString());

            Demo demo = new Demo();
            demo.doSomething();
        }
    }
}
