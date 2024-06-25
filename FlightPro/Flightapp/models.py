from django.db import models

class Flight(models.Model):
    flight_number = models.CharField(max_length=20)
    flight_date = models.DateField()
    filed_by = models.CharField(max_length=50)
    filing_time = models.TimeField()
    departure_location = models.CharField(max_length=100)
    departure_time = models.TimeField()
    arrival_location = models.CharField(max_length=100)
    estimated_arrival_time = models.TimeField()
    # Check fields
    airspace_clearance = models.BooleanField(default=False)
    gc_power= models.BooleanField(default=False)
    anemometer_data= models.BooleanField(default=False)
    wp_detail= models.BooleanField(default=False)
    wp_heading= models.BooleanField(default=False)
    mission_status= models.BooleanField(default=False)
    mission_choice= models.BooleanField(default=False)
    windy_data=models.BooleanField(default=False)
    windy_data_cm= models.TextField(blank=True, null=True)
    anemometer_data_cm= models.TextField(blank=True, null=True)
    wp_heading_cm = models.TextField(blank=True, null=True)
    wp_details_cm= models.TextField(blank=True, null=True)
    mission_choice_cm = models.TextField(blank=True, null=True)
    gc_power_cm= models.TextField(blank=True, null=True)

    def __str__(self):
        return f"Preflight Check {self.id}"



    