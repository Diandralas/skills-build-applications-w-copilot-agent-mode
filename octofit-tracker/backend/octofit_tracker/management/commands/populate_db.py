from django.core.management.base import BaseCommand
from octofit_tracker.models import User, Team, Activity, Leaderboard, Workout

class Command(BaseCommand):
    help = 'Populate the database with test data'

    def handle(self, *args, **kwargs):
        # Clear existing data
        User.objects.all().delete()
        Team.objects.all().delete()
        Activity.objects.all().delete()
        Leaderboard.objects.all().delete()
        Workout.objects.all().delete()

        # Populate Users
        user1 = User.objects.create(name="Alice Johnson", email="alice@example.com", password="hashed_password")
        user2 = User.objects.create(name="Bob Smith", email="bob@example.com", password="hashed_password")

        # Populate Teams
        team1 = Team.objects.create(name="Team Alpha")
        team2 = Team.objects.create(name="Team Beta")

        # Populate Activities
        Activity.objects.create(user_id=user1._id, activity_type="Running", duration=30)
        Activity.objects.create(user_id=user2._id, activity_type="Cycling", duration=45)

        # Populate Leaderboard
        Leaderboard.objects.create(user_id=user1._id, score=100)
        Leaderboard.objects.create(user_id=user2._id, score=150)

        # Populate Workouts
        Workout.objects.create(name="Morning Cardio", description="A quick morning cardio session", duration=20)
        Workout.objects.create(name="Evening Yoga", description="Relaxing yoga session", duration=40)

        self.stdout.write(self.style.SUCCESS('Successfully populated the database with test data'))
