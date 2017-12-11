using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

namespace HelloWorld
{
    class Demo
    {
        // Show off various issues detected by Globalyzer
        Encoding asci = Encoding.ASCII;
        Encoding latin = Encoding.GetEncoding("ISO-8859-1");
        CharSet charset = CharSet.Auto;
        CaseInsensitiveComparer comparer = new CaseInsensitiveComparer();
        String lowercase = "U.S Capitals".ToLower();
        
        String hardCoded = "Demo String.";

        public void doSomething()
        {
            asci.GetBytes("Hello");
            lowercase.ToUpper();
        }
    }
}
