
package com.example.demo.Entity;


import jakarta.persistence.*;

@Entity
@Table(name="portal")
public class model {

	@Id
	private String fname;
	private String lname;
	private long mobile;
	private String address;
	private String email;
	private String pass;
	
	
	public String getFname() {
		return fname;
	}


	public void setFname(String fname) {
		this.fname = fname;
	}


	public String getLname() {
		return lname;
	}


	public void setLname(String lname) {
		this.lname = lname;
	}


	public long getMobile() {
		return mobile;
	}


	public void setMobile(long mobile) {
		this.mobile = mobile;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getPass() {
		return pass;
	}


	public void setPass(String pass) {
		this.pass = pass;
	}


	public model(String fname, String lname, long mobile, String address, String email, String pass) {
		super();
		this.fname = fname;
		this.lname = lname;
		this.mobile = mobile;
		this.address = address;
		this.email = email;
		this.pass = pass;
	}


	public model() {
		super();
	}
}
