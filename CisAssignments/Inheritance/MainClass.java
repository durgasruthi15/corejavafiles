package Inheritance;

public class MainClass
{
	public static void main(String[] args) {
		
		House h1= new House();
		OneBedRoom bd1 = new OneBedRoom();
		System.out.println(h1.Rent());
		System.out.println(bd1.Rent());
	}

}
