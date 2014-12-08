#Site Template For Events
=========================

A simple site that will let orgnizers of small events/confereance/hackathon and option to have their ionformation, registration in one place.
Btw, checkout [hackdaymanifesto](https://github.com/greenido/hackdaymanifesto.github.com/blob/master/index.markdown) in order to improve your next hackathon.

## Demo
 http://bit.ly/html5-lon
 I've used this site for that event.
 
## The major sections:
1. What is the event
2. Where (add some nice map to the event spot + parking)
3. Contact 
4. Reigstration - Use google sheet with [Apps script](https://github.com/greenido/events-site-template/blob/master/G-doc-scripts/util.js)

This 'backend' code will let you send emails to the people that registered (confirmations, reminders, waiting-list etc;) and also gain valuable feedback after the event.

## ToDo
* Make the site more 'mobile' with foundation css.
* Enable the site to run in 'offline' mode:
  * Let the user fill the form and send it when you have connection.
  * Let users 'save' their plan for the event (?)
* ServiceWorkers - to enable notification when sessions start.


