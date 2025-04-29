from django.test import TestCase
from .models import User, Team, Activity, Leaderboard, Workout

class UserModelTest(TestCase):
    def test_create_user(self):
        user = User.objects.create(name="Test User", email="test@example.com", password="password")
        self.assertEqual(user.name, "Test User")

# Add similar tests for Team, Activity, Leaderboard, and Workout models
