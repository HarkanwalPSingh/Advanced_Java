function Employee(firstName, lastName, basicSalary){
	this.firstName=firstName;
	this.lastName=lastName;
	this.basicSalary=basicSalary;
	this.totalSalary=0;
	this.calculateTotalSalary = ()=>{
		this.totalSalary=this.basicSalary;
		return this.totalSalary
	}
}
Employee.prototype.email="default@gmail.com";
Employee.prototype.fullName=function(){
	return this.firstName+" "+this.lastName;
}

function Pemployee(firstName,lastName,basicSalary){
	this.hra=0;
	this.ta=0;
	this.da=0;
	Employee.call(this, firstName, lastName, basicSalary)
	this.calculateTotalSalary=()=>{
		this.hra=this.basicSalary*10/100;
		this.ta=this.basicSalary*8/100;
		this.da=this.basicSalary*7/100;
		this.totalSalary=this.basicSalary+this.ta+this.da+this.hra;
		return this.totalSalary
	}
	var pemp = new Pemployee("Kumar","Abhishek",10000);
	Pemployee.prototype.email="default@gmail.com";
	Pemployee.prototype.fullName=function(){
		return this.firstName+" "+this.lastName;
	}
	console.log("this is test");
	console.log(pemp.fullName);
}