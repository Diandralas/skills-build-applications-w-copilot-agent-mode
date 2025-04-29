from djongo import models

class User(models.Model):
    _id = models.ObjectIdField()
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

class Team(models.Model):
    _id = models.ObjectIdField()
    name = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

class Activity(models.Model):
    _id = models.ObjectIdField()
    user_id = models.ObjectIdField()
    activity_type = models.CharField(max_length=100)
    duration = models.IntegerField()  # in minutes
    created_at = models.DateTimeField(auto_now_add=True)

class Leaderboard(models.Model):
    _id = models.ObjectIdField()
    user_id = models.ObjectIdField()
    score = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

class Workout(models.Model):
    _id = models.ObjectIdField()
    name = models.CharField(max_length=100)
    description = models.TextField()
    duration = models.IntegerField()  # in minutes
    created_at = models.DateTimeField(auto_now_add=True)
