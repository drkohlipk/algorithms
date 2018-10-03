using System;
using System.Collections.Generic;
using System.Threading;

class FizzBuzz
{
  private static bool checkIfDivisibleByThreeAndFive(Object obj)
  {
    int currNum;
    
    try
    {
      currNum = (int) obj;
    
      if (currNum % 5 == 0 && currNum % 3 == 0)
      {
        Console.WriteLine("FizzBuzz");
        
        return true;
      }
      else
      {
        return false;
      }
    }
    catch (InvalidCastException e)
    {
      throw e;
    }
  }
  
  private static bool checkIfDivisibleByFive(Object obj)
  {
    int currNum;
    
    try
    {
      currNum = (int) obj;
    
      if (currNum % 5 == 0)
      {
        Console.WriteLine("Buzz");
        
        return true;
      }
      else
      {
        return false;
      }
    }
    catch (InvalidCastException e)
    {
      throw e;
    }
  }
  
  private static bool checkIfDivisibleByThree(Object obj)
  {
    int currNum;
    
    try
    {
      currNum = (int) obj;
    
      if (currNum % 3 == 0)
      {
        Console.WriteLine("Fizz");
        
        return true;
      }
      else
      {
        return false;
      }
    }
    catch (InvalidCastException e)
    {
      throw e;
    }
  }
  
  private static void printNum(Object obj)
  {
    int currNum;
    
    try
    {
      currNum = (int) obj;
      Console.WriteLine(currNum.ToString());
    }
    catch (InvalidCastException e)
    {
      throw e;
    }
  }
  
  private static void fizzBuzz(int[] arr)
  {
    foreach (int num in arr)
    {
      bool hasRan = false;
      
      Thread threadOne = new Thread((Object obj) =>
                                    {
                                      hasRan = checkIfDivisibleByThreeAndFive(obj);
                                    });
      Thread threadTwo = new Thread((Object obj) =>
                                    {
                                      hasRan = checkIfDivisibleByFive(obj);
                                    });
      Thread threadThree = new Thread((Object obj) =>
                                      {
                                        hasRan = checkIfDivisibleByThree(obj);
                                      });
      Thread threadFour = new Thread((Object obj) => 
                                     {
                                       printNum(obj);
                                       hasRan = true;
                                     });
      
      Queue<Thread> q = new Queue<Thread>();
      q.Enqueue(threadOne);
      q.Enqueue(threadTwo);
      q.Enqueue(threadThree);
      q.Enqueue(threadFour);
      
      while (!hasRan)
      {
        Thread currThread = q.Dequeue();
        currThread.Start(num);
        Thread.Sleep(100);
      }
    
      threadOne.Abort();
      threadTwo.Abort();
      threadThree.Abort();
      threadFour.Abort();
    }
  }
  
  static void Main(string[] args)
  {
    int[] arr = new int[]{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15};
    
    fizzBuzz(arr);
  }
}
