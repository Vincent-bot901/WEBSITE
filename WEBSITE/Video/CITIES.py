import time
from datetime import datetime
import reverse_geocoder
from orbit import ISS
from picamera import PiCamera
from pathlib import Path

cam = PiCamera()
cam.resolution = (1296,972)
#Take the picture
def capture(var, cam):
    curr_time = time.strftime(" %m-%d-%H", time.localtime())
    cam.capture(f"/home/pi/VARMESTE/PIC/{var}{curr_time}.jpg")
        
#Where are we?
def runit(var):
    coordinates = ISS.coordinates()
    coordinate_pair = (
        coordinates.latitude.degrees,
        coordinates.longitude.degrees)
    location = reverse_geocoder.search(coordinate_pair)
    print(location[0]["name"].upper())
    time.sleep(5)
    if var != location[0]["name"].upper():
        var = location[0]["name"].upper() 
        capture(var,cam)
        runit(var)
    else:
        var = location[0]["name"].upper() 
        runit(var)
    
runit(0)
    