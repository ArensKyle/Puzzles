using System;
using System.Linq;
using System.Collections.Generic;

public class Brace {

    //public object to hold braces so that it can be manipulated by the helper function
    public static string braces2;

    //helper function to remove braces
    public static void braceRemover () { 
      for (int i = 0; i < braces2.Length - 1; i++) {
      Console.WriteLine(braces2[i].ToString() + "" + braces2[i+1].ToString());
        if (braces2[i].ToString() == "(" && braces2[i+1].ToString() == ")") {
          Console.WriteLine("Paren");
          braces2 = braces2.Remove(i, 2);
          braceRemover();
        } else if (braces2[i].ToString() == "[" && braces2[i+1].ToString() == "]") {
          Console.WriteLine("Brack");
		      braces2 = braces2.Remove(i, 2);
          braceRemover();
		    } else if (braces2[i].ToString() == "{" && braces2[i+1].ToString() == "}") {
          Console.WriteLine("Curl");
		      braces2 = braces2.Remove(i, 2);
          braceRemover();
		    }
      }
    }

    public static bool validBraces(String braces) {
      braces2 = braces; //assign braces string to public object so that it can be modified through iteration of helper function
      braceRemover();
      Console.WriteLine(braces2);
       if (braces2.Length == 0) {
         return true;
       } else {
         return false;
       }
    }
}
