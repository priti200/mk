from email.message import EmailMessage
from email.mime.multipart import MIMEMultipart
from email.mime.base import MIMEBase
from email.mime.text import MIMEText
import smtplib, ssl
import marsrover_

def image(lst):
    email_receiver=lst[0]
    subject=lst[1]
    email_sender='preeeet200@gmail.com'
    email_password='uwwanoyjebhsymll'
    # email_receiver='pg629343@gmail.com'
    # subject="Hiii"
    body="""
    Share this image with your friends
    """

    em= MIMEMultipart()
    em['From']=email_sender
    em['To']=email_receiver
    em['subject']="email with image attachment from  python"
    em.set_content(lst[2])
    text=MIMEText("This is a test email with an image attachment")
    em.attach(text)
    for i in img_src:
        with open(i,"rb")as image:
            image_data=image.read()
            self.image_encoded=base64.b64encode(image_data)
            image=MIMEImage(image_data)
            message.attach(image)

    server=smtplib.SMTP("smtp.gmail.com",465)
    server.ehlo()
    server.starttls()
    server.login(email_receiver,email_password)
    server.sendmail(email_sender,email_receiver,em.as_string())
    server.quit()

    context=ssl.create_default_context()

    with smtplib.SMTP_SSL('smtp.gmail.com',465,context=context) as smtp:
        smtp.login(email_sender,email_password)
        smtp.sendmail(email_sender,email_receiver,em.as_string())