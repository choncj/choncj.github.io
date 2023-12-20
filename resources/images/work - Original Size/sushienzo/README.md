# Sushi Meteor App Version 1.0.0
METEOR@1.7.1
Delivery Service Meteor App build on React

Application aiming to provide a reactive Ordering App including a backend and realtime orders.

# Features

> Basic admin features:

- Account System with email verification.
- User info is editable, recent Orders can be viewed on the profile.
- User Point system, can be used on orders.
- Product Database that runs with categories to set various products.
- Create Predefined and Custom Sushiboxes and set the price and point ratio.
- If making a Product unavailable the associated Sushibox will also be marked as unavailable unless you swap the unavailable product out and set the state back to true.
- You have 4 roles for your Usermanagement 'user', 'employee', 'admin', 'superadmin'. With each role you get more and more access and functionality in the backend. Users are forced back to the frontpage if trying to go in the office section.
- You are able to create unique Discount codes and add a valid till date to it. You also can manuel deactivate the discount code.
- Set GDPR settings, in order to stay GDPR compliant.
- Shop Settings, configure User Point System, Shop Opening Times (per day), first page to display, delivery Radius, delivery cost.

> Users can:

- Register if they live within the Netherlands. But they can only order if they are within our Zipcode radius checker. We set the radius within our setup.json file.
- Order multiple products and can chose to pay with Cash, Card or Online Payment. We use the service Mollie.
- Able to gather points by spending money. Every 20€ a user gets one point. If using Points the user wont get points for that transaction.
- Use their points to get a discount on their current order. One point is 1€.
- Use Discountcodes.
- Preorder two weeks in advance.
- Pickup the Order at the store.
- Order with a different address than registered. This new address is checked with our Zipcode radius filter.
- Create their own Sushibox. 
- Track Order Progress.

----

## How to Install
1. Install [Chocolatey](https://chocolatey.org/install)
2. Install [Meteor](https://www.meteor.com) 
	* ```choco install meteor```
3. Clone this Project
4. Install NPM packages
    * ```meteor npm install```
	 used npm packages listed below
5. Run Meteor in cmd: 
    * ```meteor --settings development.json```
6. Create your own branch to develope example branch name: ```development-username```
7. IMPORTAND add radius in settings.json to desired ordering raidus. currently its set to 20km "20000 is 20km"


> My path 
> C:\Users\<USERNAME>\AppData\Roaming\npm\mup
## How to Deploy
> get Letscrypt or custom ssl certificate [Letscrypt Runthrough](https://medium.com/@getdrizzle/deploying-meteor-app-with-free-ssl-certificate-mupx-letsencrypt-digital-ocean-7c85d90cc731)
1. Go to Project root and type "where is mup" in to cmd on windows.
2. "./path/mup init" to initialize the files to setup.
3. "./path/mup setup" to setup server.
4. "meteo add force-ssl" to force ssl connection on server!
5. "./path/mup deploy" deploy app!

# How to backup
1. Install mongodump on server. SSH in to server, ``` sudo -i ``` and install mongodump ``` apt install mongodb-clients ```.
2. Make backup directory 
	- ``` cd .. ``` to go to root
	- ``` mkdir /var/backups/mongobackups ``` to make a backup directory
3. Create first backup entry by typing ``` mongodump --db THE_DB_NAME --out /var/backups/mongobackups/`date +"%m-%d-%y"` ```

# Create cronjob for backups
1. ``` sudo crontab -e ``` Enter crontab window.
2. Add 
	- ``` 3 3 * * * mongodump --out /var/backups/mongobackups/`date +"%m-%d-%y"` ``` This will create the backup regulary
	- ``` 3 1 * * * find /var/backups/mongobackups/ -mtime +7 -exec rm -rf {} \; ``` To delete all the backups older than 7 days. It should run just before you start the next backup, e.g. at 03:01 AM 

## Todo
- [X] Product system (add/ remove products)
- [X] Order system (view, edit or cancel Orders)
- [X] Employee management (add employee login)
- [X] User management (view registered user data)
- [X] Discount Code (add/ remove discount codes)
- [ ] Order to print (print orders from the backend or when a new order got added)
- [X] Returning Visitor discount
- [X] Sushi box point system
- [X] Payment Solution

----