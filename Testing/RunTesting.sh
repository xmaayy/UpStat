docker ps
docker network create --subnet=172.20.0.0/16 UpStat_test_net
docker run --name TestServ --net UpStat_test_net --ip 172.20.0.5 -d -t test_cont >> testfile.txt 
docker run --name TestClient1 --net UpStat_test_net --ip 172.20.0.6 -d -t test_cont >> testfile.txt
