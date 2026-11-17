package main;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Login {
	@FindBy (xpath = "(//input[@type='text'])[1]")
	private WebElement usreName ;
	
	@FindBy (xpath = "(//input[@type='password'])[1]")
	private WebElement pass ;
	
	@FindBy (xpath = "//input[@type='checkbox']")
	private WebElement cheakbutton ;
	
	@FindBy (xpath = "//a[@id='loginButton']")
	private WebElement loginbutton ;
	
	public Login(WebDriver driver)
	{
		PageFactory.initElements(driver,this);
  //  wait=new WebDriverWait(driver,10); //10sec.
	}
public void userName1()
{
	usreName.sendKeys("admin");
}
public void password()
{
	pass.sendKeys("manager");
}
public void cheakbutton()
{
	cheakbutton.click();
}
public void loginbButton()
{
	loginbutton.click();
}


}
