from django import forms
from .models import Student

class StudentForm(forms.ModelForm):
    class Meta:
        model = Student
        fields = ['full_name', 'email', 'phone', 'dob', 'gender', 'course', 'address']
        widgets = {
            'full_name': forms.TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'Enter full name'
            }),
            'email': forms.EmailInput(attrs={
                'class': 'form-control',
                'placeholder': 'Enter email address'
            }),
            'phone': forms.TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'Enter phone number'
            }),
            'dob': forms.DateInput(attrs={
                'class': 'form-control',
                'type': 'date'
            }),
            'gender': forms.Select(attrs={
                'class': 'form-select'
            }),
            'course': forms.Select(attrs={
                'class': 'form-select'
            }),
            'address': forms.Textarea(attrs={
                'class': 'form-control',
                'rows': 3,
                'placeholder': 'Enter address'
            }),
        }
    
    def clean_email(self):
        email = self.cleaned_data.get('email')
        if self.instance.pk:  # If updating existing student
            if Student.objects.exclude(pk=self.instance.pk).filter(email=email).exists():
                raise forms.ValidationError('This email is already registered.')
        else:  # If creating new student
            if Student.objects.filter(email=email).exists():
                raise forms.ValidationError('This email is already registered.')
        return email 