from email.message import EmailMessage
from email.mime.multipart import MIMEMultipart
from email.mime.base import MIMEBase
from email.mime.text import MIMEText
import smtplib, ssl
import imghdr
# import marsrover_

def mail(lst):
    email_sender='preeeet200@gmail.com'
    email_password='uwwanoyjebhsymll'
    # email_receiver='pg629343@gmail.com'


    message=EmailMessage()

    contacts=['pg629343@gmail.com','pritugupta2001@gmail.com']#multiple reciever
    message['Subject']="Plain message 'Hare Krishna'"
    message['From']=email_sender
    message['To']=",".join(contacts)

    message.set_content("we r sending some plain text email and attached some image")

    try:
        for i in range(1,10):
            with open(f"images/photo{i}.png",'rb') as imeg:
                file_data=imeg.read()
                file_type=imghdr.what(imeg.name)
                file_name=imeg.name
            message.add_attachment(file_data,maintype='image',subtype = file_type,filename= file_name)

    except FileNotFoundError:
        pass

    with smtplib.SMTP_SSL('smtp.gmail.com',465) as mail:
        mail.login(email_sender,email_password)
        mail.send_message(message)
