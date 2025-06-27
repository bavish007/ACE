from django.db import models

# Create your models here.

class Student(models.Model):
    GENDER_CHOICES = [
        ('M', 'Male'),
        ('F', 'Female'),
        ('O', 'Other'),
    ]
    
    COURSE_CHOICES = [
        ('CS', 'Computer Science'),
        ('IT', 'Information Technology'),
        ('EE', 'Electrical Engineering'),
        ('ME', 'Mechanical Engineering'),
        ('CE', 'Civil Engineering'),
        ('BA', 'Business Administration'),
        ('MA', 'Mathematics'),
        ('PH', 'Physics'),
        ('CH', 'Chemistry'),
        ('BI', 'Biology'),
    ]
    
    full_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=15)
    dob = models.DateField()
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    course = models.CharField(max_length=2, choices=COURSE_CHOICES)
    address = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-created_at']
    
    def __str__(self):
        return self.full_name
    
    def get_gender_display(self):
        return dict(self.GENDER_CHOICES)[self.gender]
    
    def get_course_display(self):
        return dict(self.COURSE_CHOICES)[self.course]
