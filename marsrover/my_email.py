from email.message import EmailMessage
import smtplib, ssl

email_sender='pg629343@gmail.com.com'
email_password='qqdoqviypzavaksn'
email_receiver='pritugupta2001@gmail.com'
subject="Hiii"
body="""
Share this image with your friends
"""

em= EmailMessage()
em['From']=email_sender
em['To']=email_receiver
em['subject']=subject
em.set_content(body)

context=ssl.create_default_context()

with smtplib.SMTP_SSL('smtp.gmail.com',465,context=context) as smtp:
    smtp.login(email_sender,email_password)
    smtp.sendmail(email_sender,email_receiver,em.as_string())