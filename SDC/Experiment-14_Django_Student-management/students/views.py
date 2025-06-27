from django.shortcuts import render, get_object_or_404, redirect
from django.contrib import messages
from django.core.paginator import Paginator
from django.db.models import Q
from .models import Student
from .forms import StudentForm

def home(request):
    """Home page view"""
    total_students = Student.objects.count()
    recent_students = Student.objects.all()[:5]
    
    context = {
        'total_students': total_students,
        'recent_students': recent_students,
    }
    return render(request, 'students/home.html', context)

def student_list(request):
    """List all students with search and pagination"""
    students = Student.objects.all()
    
    # Search functionality
    search_query = request.GET.get('search', '')
    if search_query:
        students = students.filter(
            Q(full_name__icontains=search_query) |
            Q(email__icontains=search_query) |
            Q(course__icontains=search_query)
        )
    
    # Sorting functionality
    sort_by = request.GET.get('sort', '-created_at')
    if sort_by == 'name_asc':
        students = students.order_by('full_name')
    elif sort_by == 'name_desc':
        students = students.order_by('-full_name')
    elif sort_by == 'dob':
        students = students.order_by('dob')
    else:
        students = students.order_by('-created_at')
    
    # Pagination
    paginator = Paginator(students, 10)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    
    context = {
        'page_obj': page_obj,
        'search_query': search_query,
        'sort_by': sort_by,
    }
    return render(request, 'students/student_list.html', context)

def add_student(request):
    """Add a new student"""
    if request.method == 'POST':
        form = StudentForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Student added successfully!')
            return redirect('student_list')
        else:
            messages.error(request, 'Please correct the errors below.')
    else:
        form = StudentForm()
    
    context = {
        'form': form,
        'title': 'Add New Student'
    }
    return render(request, 'students/student_form.html', context)

def edit_student(request, pk):
    """Edit an existing student"""
    student = get_object_or_404(Student, pk=pk)
    
    if request.method == 'POST':
        form = StudentForm(request.POST, instance=student)
        if form.is_valid():
            form.save()
            messages.success(request, 'Student updated successfully!')
            return redirect('student_list')
        else:
            messages.error(request, 'Please correct the errors below.')
    else:
        form = StudentForm(instance=student)
    
    context = {
        'form': form,
        'student': student,
        'title': 'Edit Student'
    }
    return render(request, 'students/student_form.html', context)

def delete_student(request, pk):
    """Delete a student"""
    student = get_object_or_404(Student, pk=pk)
    
    if request.method == 'POST':
        student.delete()
        messages.success(request, 'Student deleted successfully!')
        return redirect('student_list')
    
    context = {
        'student': student
    }
    return render(request, 'students/delete_student.html', context)

def about(request):
    """About page"""
    return render(request, 'students/about.html')

def contact(request):
    """Contact page"""
    return render(request, 'students/contact.html')
