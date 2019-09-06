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

            String greeting2 = "This is";
            greeting2 += " a sample!";

            DateTime now = DateTime.Now;

            Console.WriteLine(greeting);
            Console.WriteLine(greeting2);
            Console.WriteLine(now.ToLongDateString());

            Demo demo = new Demo();
            demo.doSomething();
        }
    }
}
