package main;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Home {
@FindBy  (xpath = "(//img[@class='sizer'])[1]")
private WebElement create ;

 public Home(WebDriver driver)
 {
	 PageFactory.initElements(driver, this);
 }
public void createHeader()
{
	create.click();
}
}