using System;

public class Kata
{
  public static string Add(string a, string b)
  {
    Console.WriteLine(a);
    Console.WriteLine(b);
  
    int alen = a.Length - 1;
    int blen = b.Length - 1;
  
    if (a.Length == -1)
      return b;
    if (b.Length == -1)
      return a;
    
    int carry = 0;
    string sum = "";
    int digit = 0;
    int acurr = 0;
    int bcurr = 0;
    while ((alen != -1) || (blen != -1)) {
      if (alen == -1) {
        bcurr = Convert.ToInt32(b[blen].ToString());
        digit = (bcurr + carry) % 10;
        sum = digit.ToString() + sum;
        if ((bcurr + carry) > 9) {
          carry = 1;
        } else {
          carry = 0;
        }
        blen--;
      }
      else if (blen == -1) {
        acurr = Convert.ToInt32(a[alen].ToString());
        digit = (acurr + carry) % 10;
        sum = digit.ToString() + sum;
        if ((acurr + carry) > 9) {
          carry = 1;
        } else {
          carry = 0;
        }
        alen--;
      }
      else {
        acurr = Convert.ToInt32(a[alen].ToString());
        bcurr = Convert.ToInt32(b[blen].ToString());
        digit = ((acurr + bcurr) + carry) % 10;
        sum = digit.ToString() + sum;
        if ((acurr + bcurr + carry) > 9) {
          carry = 1;
        } else {
          carry = 0;
        }
        alen--;
        blen--;

      }
    }
    if (carry == 1) {
      sum = "1" + sum;
    }
    
    if (sum[0].ToString() == "0" || Convert.ToInt32(sum[0].ToString()) == 0) {
      sum.Remove(0, 1);
    }
    
    return sum;
  }
}
