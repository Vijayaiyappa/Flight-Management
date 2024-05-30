from __future__ import absolute_import, unicode_literals
import os
from celery import Celery
from celery.schedules import crontab

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'proxy_list.settings')

app = Celery('proxy_list')

app.config_from_object('django.conf:settings', namespace='')

app.autodiscover_tasks()

app.conf.beat_schedule = {
    'task-name': {
        'task': 'task_scheduler.tasks.print_message',
        'schedule': crontab(minute=0, hour=0),
    },
}
