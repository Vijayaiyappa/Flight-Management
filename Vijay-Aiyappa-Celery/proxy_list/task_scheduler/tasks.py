
from __future__ import absolute_import, unicode_literals

from __future__ import absolute_import, unicode_literals
from celery import shared_task
from .models import Proxy
import requests

@shared_task
def print_message():
    url = "https://proxylist.geonode.com/api/proxy-list?sort_by=lastChecked&sort_type=desc"
    try:
        response = requests.get(url)
        if response.status_code == 200:
            proxy_data = response.json().get('data', [])
            for proxy_info in proxy_data:
                Proxy.objects.create(
                    ip=proxy_info['ip'],
                    port=proxy_info['port'],
                    protocol=proxy_info['protocols'][0],
                    country=proxy_info['country'],
                    uptime=proxy_info['upTime']
                )
    except requests.RequestException as e:
        print("Error fetching proxies:", e)
