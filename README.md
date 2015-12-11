# Asthma Foundation NZ

Any functionality relating to the Craft Boilerplate is found in the [Vulcan repository](https://bitbucket.org/evolution7/vulcan).

## Database importing
Latest section/field structure can be created without a copy of the boilerplate database by activating the Schematic plugin and running:
```bash
./craft/app/etc/console/yiic schematic import --force
```

**Note:** If you require pre existing data you will need to copy the staging database or one from another developer.

## Gulp workflow
We are using the new modular-gulp branch of Vulcan which will modify your webroot setup slight. This application only requires `public` to be your webroot and the assets pushed to this folder depend on the gulp command run.
```bash
# Development assets
gulp build

# Production assets (minified, revved etc)
gulp build --production
```
