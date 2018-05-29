# Prereqs 

To do full testing of the package, docker must be installed. This ensures that proper network handling is done rather than just having it commnuicate over localhost.

### Full testing
Docker must be installed

Make sure you have your Docker group set up to allow non root access to the Docker Daemon (https://docs.docker.com/install/linux/linux-postinstall/) or these tests will fail marvelously. If thats not an option, you can run the testing script as root but thats not as safe as having yourself in the docker group.

### TODO Partial Testing
This would allow testing of the package without docker, less comprehensive but more accessible
