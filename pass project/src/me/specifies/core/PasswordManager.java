package me.specifies.core;

import java.util.ArrayList;

public class PasswordManager {
	
	public String manip = "cb8aslca@slaSd@4c##";
	
	private int count = manip.length();
	
	private ArrayList<String> skip = new ArrayList<String>();
	
	
	public void returnGeneratedPass() {
		
		String firstseq = startSeq();
		String secondseq = endSeq();
		String middleseq = middle();
		
		System.out.print("Encrypted password: " + firstseq + middleseq + secondseq);
	}
	private String startSeq() {
		int cont = count -1;
		int cont2 = count - 2;
		
		skip.add(convertInt(cont));
		skip.add(convertInt(cont2));
		
		char o = manip.charAt(cont);
		char o1 = manip.charAt(cont2);
		
		String returns = "";
		returns += o1;
		returns += o;
		
		return returns;
	}
	private String endSeq() {
		skip.add("0");
		skip.add("1");
		
		String returns = "";
		
		returns += manip.charAt(0);
		returns += manip.charAt(1);
		
		return returns;
	}
	private String middle() {
		String returns = "";
		int control = 0;
		for(int i = 0; i < count; i++) {
			if(skip.contains(convertInt(i))) {
				
			} else {
				control += 1;
			}
		}
		int cont2 = 0;
		for(int i = 0; i < control; i++) {
			cont2 += 1;
			if(cont2 == 1) {
				returns += "!";
			}
			if(cont2 == 2) {
				returns += "0";
				cont2 = 0;
			}
		}
		return returns;
	}
	
	
	
	
	private String convertInt(int toCon) {
		return Integer.toString(toCon);
	}
	

}
