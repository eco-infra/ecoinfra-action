provider "aws" {
  region = "eu-west-2"
}

resource "aws_instance" "test" {
  ami           = "ami-005e54dee72cc1d00"
  instance_type = "t2.nano"

  network_interface {
    network_interface_id = "id"
    device_index         = 0
  }

  credit_specification {
    cpu_credits = "unlimited"
  }
}
