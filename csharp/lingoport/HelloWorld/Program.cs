using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HelloWorld
{
    class Program
    {
        static void Resx()
        {
            String greeting = Properties.Resource1.Hello;
            greeting += " " + Properties.Resource1.World;

            Console.WriteLine(greeting);
        }
        
        static void Main(string[] args)
        {
            String greeting = "Hello";
            greeting += " World!";

            String greeting2 = "You have a small car";
            greeting2 += " that has a very nice color.";

            DateTime now = DateTime.Now;

            Console.WriteLine(greeting);
            Console.WriteLine(greeting2);
            Console.WriteLine(now.ToLongDateString());

            Demo demo = new Demo();
            demo.doSomething();
        }
    }
}
