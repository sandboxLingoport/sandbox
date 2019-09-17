using System;
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
            greeting += " World!";

            String greeting2 = "Hello2";
            greeting2 += " World2!";
            
            DateTime now = DateTime.Now;

            Console.WriteLine(greeting);
            Console.WriteLine(now.ToLongDateString());

            Console.WriteLine(greeting2);
            
            Demo demo = new Demo();
            demo.doSomething();
        }
    }
}
