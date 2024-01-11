package sruthi;

public class Student 
{
	String name="Durga Sruthi";
	String getName()
	{
		return name;
	}
	
	public static void main(String[]args)
	{
		Student s1=new Student();
		System.out.println(s1.getName());
	}

}
