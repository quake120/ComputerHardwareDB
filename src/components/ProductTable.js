import React, { Component } from "react";
import { Table, Button, Input, Menu } from "antd";

export class ProductTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          key: "1",
          category: "GPU",
          brand: "NVidia",
          model: "GeForce 1060",
          price: "300",
          link: "http://www.google.com"
        },
        {
          key: "4",
          brand: "Gigabyte",
          model: "G1 Gaming 1070",
          price: 400,
          link: "http://www.google.com"
        },
        {
          key: "2",
          brand: "NVidia",
          model: "GeForce 1070",
          price: "100"
        },
        {
          key: "3",
          brand: "AMD",
          model: "Blah",
          price: 200,
          link: "http://www.google.com"
        },
        {
          key: "5",
          brand: "ASUS",
          model: "2080",
          price: 600,
          link: "http://www.google.com"
        }
      ],
      columns: [
        {
          title: "Brand",
          dataIndex: "brand",
          width: 80,
          key: "brand"
        },
        {
          title: "Model",
          dataIndex: "model",
          key: "brand"
        },
        {
          title: "GPU Model",
          dataIndex: "gpumodel",
          key: "gpumodel",
          width: 50
        },
        {
          title: "MSRP",
          dataIndex: "msrp",
          key: "msrp",
          width: 25,
          render: (price) => <>{`$` + price}</>
        },
        {
          title: "Price",
          dataIndex: "price",
          key: "price",
          width: 25,
          render: (price) => <>{`$` + price}</>
        },
        {
          title: "Link",
          dataIndex: "link",
          key: "link",
          render: (link) => (
            <>
              <Button>Buy Now</Button>
            </>
          )
        }
      ],
      filteredData: null
    };
  }

  filter = (event) => {
    let searchTerm = event.target.value;

    let filteredData = this.state.data.filter((d) =>
      Object.keys(d).some((k) =>
        String(d[k]).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );

    this.setState({ filteredData });
  };

  render() {
    return (
      <div>
        <Input
          size="large"
          onKeyUp={this.filter}
          placeholder="Search For Hardware"
          style={{ width: "50%" }}
        ></Input>
        <Table
          dataSource={
            this.state.filteredData == null
              ? this.state.data
              : this.state.filteredData
          }
          columns={this.state.columns}
        />
      </div>
    );
  }
}
