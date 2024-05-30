from django.db import models

class Vendor(models.Model):
    name = models.CharField(max_length=100)
    contact_details = models.TextField()
    address = models.TextField()
    vendor_code = models.CharField(max_length=50, unique=True)
    on_time_delivery_rate = models.FloatField(default=0)
    quality_rating_avg = models.FloatField(default=0)
    average_response_time = models.FloatField(default=0)
    fulfillment_rate = models.FloatField(default=0)

class PurchaseOrder(models.Model):
    po_number = models.CharField(max_length=50, unique=True)
    vendor = models.ForeignKey(Vendor, on_delete=models.CASCADE)
    order_date = models.DateTimeField()
    delivery_date = models.DateTimeField()
    items = models.JSONField()
    quantity = models.IntegerField()
    status = models.CharField(max_length=50)
    quality_rating = models.FloatField(null=True, blank=True)
    issue_date = models.DateTimeField()
    acknowledgment_date = models.DateTimeField(null=True, blank=True)

class HistoricalPerformance(models.Model):
    vendor = models.ForeignKey(Vendor, on_delete=models.CASCADE)
    date = models.DateTimeField()
    on_time_delivery_rate = models.FloatField()
    quality_rating_avg = models.FloatField()
    average_response_time = models.FloatField()
    fulfillment_rate = models.FloatField()

class DummyModel(models.Model):
    name = models.TextField()

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



    