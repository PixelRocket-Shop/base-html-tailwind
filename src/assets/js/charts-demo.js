let demoOptions = {
    'area-state2-1': {
      series: [{
      name: 'Sales',
      data: [100, 200, 200, 600, 800, 800, 900, 600 ,400 ,200 ,500 ,600]
    }],
      chart: {
      height: 80,
      type: 'area',
      toolbar: {
          show: false
      },
      sparkline: {
        enabled: true
      }
    },
    stroke: {
      width: 4,
      curve: 'smooth',
      colors: ["#FFBB29"]
    },
    dataLabels: {
      enabled: false
    },
    fill: {
      type: 'gradient',
      gradient: {
        type: 'vertical',
        colorStops: [
          {
            offset: 0,
            color: "#FFBB29",
            opacity: 0.3
          },
          {
            offset: 50,
            color: "#FFBB29",
            opacity: 0.02
          },
        ]
      },
    },
    markers: {
      strokeColors: '#0C1523',
      colors: '#ffffff',
      strokeWidth: 3,
    },
    tooltip: {
      theme: "dark",
      style: {
          fontSize: '12px',
          fontFamily: 'Inter'
      },
      x: {
          show: false
      },
      y: {
          formatter: undefined,
          title: {
              formatter: (seriesName) => seriesName.slice(0,0)
          },
      },
      marker: {
          show: false,
      }
    },
    yaxis: {
      show: false,
      min: 0,
      max: 1000,
      tickAmount: 5,
      labels: {
          style: {
              colors: '#7F8995',
              fontSize: '14px',
              fontFamily: 'Inter',
              fontWeight: 500,
          },
          formatter: (value) => { return `${value}.00` },
      },
    },
    xaxis: {
      type: 'category',
      categories: ['1','2','3','4','5','6','7','8','9','10','11','12'],
      labels: {
        show: false,
          style: {
              colors: '#7F8995',
              fontSize: '14px',
              fontFamily: 'Inter',
              fontWeight: 500
          }
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
    },
    grid: {
      show: false,
    }
    },
    'area-state2-2': {
      series: [{
      name: 'Sales',
      data: [100, 200, 200, 600, 800, 800, 900, 600 ,400 ,200 ,500 ,600]
    }],
      chart: {
      height: 80,
      type: 'area',
      toolbar: {
          show: false
      },
      sparkline: {
        enabled: true
      }
    },
    stroke: {
      width: 4,
      curve: 'smooth',
      colors: ["#564AF7"]
    },
    dataLabels: {
      enabled: false
    },
    fill: {
      type: 'gradient',
      gradient: {
        type: 'vertical',
        colorStops: [
          {
            offset: 0,
            color: "#2AD590",
            opacity: 0.3
          },
          {
            offset: 50,
            color: "#2AD590",
            opacity: 0.02
          },
        ]
      },
    },
    markers: {
      strokeColors: '#0C1523',
      colors: '#ffffff',
      strokeWidth: 3,
    },
    tooltip: {
      theme: "dark",
      style: {
          fontSize: '12px',
          fontFamily: 'Inter'
      },
      x: {
          show: false
      },
      y: {
          formatter: undefined,
          title: {
              formatter: (seriesName) => seriesName.slice(0,0)
          },
      },
      marker: {
          show: false,
      }
    },
    yaxis: {
      show: false,
      min: 0,
      max: 1000,
      tickAmount: 5,
      labels: {
          style: {
              colors: '#7F8995',
              fontSize: '14px',
              fontFamily: 'Inter',
              fontWeight: 500,
          },
          formatter: (value) => { return `${value}.00` },
      },
    },
    xaxis: {
      type: 'category',
      categories: ['1','2','3','4','5','6','7','8','9','10','11','12'],
      labels: {
        show: false,
          style: {
              colors: '#7F8995',
              fontSize: '14px',
              fontFamily: 'Inter',
              fontWeight: 500
          }
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
    },
    grid: {
      show: false,
    }
    },
    'area-state2-3': {
      series: [{
      name: 'Sales',
      data: [0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0 ,0 ,0]
    }],
      chart: {
      height: 80,
      type: 'area',
      toolbar: {
          show: false
      },
      sparkline: {
        enabled: true
      }
    },
    stroke: {
      width: 4,
      curve: 'smooth',
      colors: ["#B8C1CC"]
    },
    dataLabels: {
      enabled: false
    },
    fill: {
      type: 'gradient',
      gradient: {
        type: 'vertical',
        colorStops: [
          {
            offset: 0,
            color: "#2AD590",
            opacity: 0.3
          },
          {
            offset: 50,
            color: "#2AD590",
            opacity: 0.02
          },
        ]
      },
    },
    markers: {
      strokeColors: '#0C1523',
      colors: '#ffffff',
      strokeWidth: 3,
    },
    tooltip: {
      theme: "dark",
      style: {
          fontSize: '12px',
          fontFamily: 'Inter'
      },
      x: {
          show: false
      },
      y: {
          formatter: undefined,
          title: {
              formatter: (seriesName) => seriesName.slice(0,0)
          },
      },
      marker: {
          show: false,
      }
    },
    yaxis: {
      show: false,
      min: 0,
      max: 1000,
      tickAmount: 5,
      labels: {
          style: {
              colors: '#7F8995',
              fontSize: '14px',
              fontFamily: 'Inter',
              fontWeight: 500,
          },
          formatter: (value) => { return `${value}.00` },
      },
    },
    xaxis: {
      type: 'category',
      categories: ['1','2','3','4','5','6','7','8','9','10','11','12'],
      labels: {
        show: false,
          style: {
              colors: '#7F8995',
              fontSize: '14px',
              fontFamily: 'Inter',
              fontWeight: 500
          }
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
    },
    grid: {
      show: false,
    }
    },
    'area-state5-1': {
      series: [{
      name: 'Sales',
      data: [100, 200, 200, 600, 800, 800, 900, 600 ,400 ,200 ,500 ,600]
    }],
      chart: {
      height: 30,
      type: 'area',
      toolbar: {
          show: false
      },
      sparkline: {
        enabled: true
      }
    },
    stroke: {
      width: 4,
      curve: 'smooth',
      colors: ["#B8C1CC"]
    },
    dataLabels: {
      enabled: false
    },
    fill: {
      type: 'gradient',
      gradient: {
        type: 'vertical',
        colorStops: [
          {
            offset: 0,
            color: "#B8C1CC",
            opacity: 0.3
          },
          {
            offset: 50,
            color: "#B8C1CC",
            opacity: 0.02
          },
        ]
      },
    },
    markers: {
      strokeColors: '#0C1523',
      colors: '#ffffff',
      strokeWidth: 3,
    },
    tooltip: {
      theme: "dark",
      style: {
          fontSize: '12px',
          fontFamily: 'Inter'
      },
      x: {
          show: false
      },
      y: {
          formatter: undefined,
          title: {
              formatter: (seriesName) => seriesName.slice(0,0)
          },
      },
      marker: {
          show: false,
      }
    },
    yaxis: {
      show: false,
      min: 0,
      max: 1000,
      tickAmount: 5,
      labels: {
          style: {
              colors: '#7F8995',
              fontSize: '14px',
              fontFamily: 'Inter',
              fontWeight: 500,
          },
          formatter: (value) => { return `${value}.00` },
      },
    },
    xaxis: {
      type: 'category',
      categories: ['1','2','3','4','5','6','7','8','9','10','11','12'],
      labels: {
        show: false,
          style: {
              colors: '#7F8995',
              fontSize: '14px',
              fontFamily: 'Inter',
              fontWeight: 500
          }
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
    },
    grid: {
      show: false,
    }
    },
    'donut': {
        series: [40, 20, 20],
        chart: {
            type: 'donut',
            height: 260,
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        labels: ['Sale', 'Expenses', 'Revenue'],

        colors: ['#3F3CFF', '#0C1523', '#CBD2D9'],
        stroke: {
            colors: 'transparent',
            lineCap: 'round',
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '79%',
                    labels: {
                        show: true,
                        name: {
                            offsetY: 25,
                            formatter: function (val) {
                              return val
                            }
                        },
                        value: {
                            show: true,
                            fontSize: '28px',
                            fontFamily: 'Inter',
                            fontWeight: 600,
                            color: '#0C1523',
                            offsetY: -15,
                            formatter: function (val) {
                                return val + '%'
                            }
                        },
                        total: {
                            show: true,
                            label: 'Investment',
                            fontSize: '14px',
                            fontFamily: 'Inter',
                            fontWeight: 400,
                            color: '#7F8995',
                            formatter: function (w) {
                                return w.globals.seriesTotals.reduce((a, b) => {
                                    return a + b
                                  }, 0) + '%'
                            }
                          }
                    },
                },
            }
        },
    },
    'semi-donut': {
        series: [2, 6, 8],
        chart: {
            type: 'donut',
            height: 400,
        },
        dataLabels: {
            enabled: false,
        },
        colors: ['#EAEDF0', '#000000', '#3F3CFF'],
        labels: ['Users', 'Views', 'Discount'],
        legend: {
            show: false
        },
        plotOptions: {
            pie: {
              startAngle: -90,
              endAngle: 90,
                donut: {
                    size: '72%',
                    labels: {
                        show: true,
                        name: {
                            offsetY: -60,
                            formatter: function (val) {
                            return val
                            }
                        },

                        value: {
                            show: true,
                            fontSize: '28px',
                            fontFamily: 'Inter',
                            fontWeight: 600,
                            color: '#0C1523',
                            offsetY: -30,
                            formatter: function (val) {
                                return val + ' Months'
                            }
                        },
                        total: {
                            show: true,
                            label: 'Runway',
                            fontSize: '16px',
                            fontFamily: 'Inter',
                            fontWeight: 500,
                            color: '#7F8995',
                            formatter: function (w) {
                                return w.globals.seriesTotals.reduce((a, b) => {
                                    return a + b
                                }, 0) + ' Months'
                            }
                        }
                    },
                },
            }
        },
    },
    'donut-2': {
      series: [40, 20, 20],
      chart: {
          type: 'donut',
          height: 220,
      },
      dataLabels: {
          enabled: false,
      },
      legend: {
          show: false,
      },
      labels: ['Website', 'Facebook', 'Instagram'],
      colors: ['#3F3CFF', '#0C1523', '#CBD2D9'],
      stroke: {
          colors: 'transparent',
          lineCap: 'round',
      },
      plotOptions: {
          pie: {
              donut: {
                  size: '79%',
                  labels: {
                      show: true,
                      name: {
                          offsetY: 25,
                          formatter: function (val) {
                            return val
                          }
                      },
                      value: {
                          show: true,
                          fontSize: '28px',
                          fontFamily: 'Inter',
                          fontWeight: 700,
                          color: '#0C1523',
                          offsetY: -15,
                          formatter: function (val) {
                              return val + '%'
                          }
                      },
                      total: {
                          show: true,
                          label: 'Total Sales',
                          fontSize: '14px',
                          fontFamily: 'Inter',
                          fontWeight: 400,
                          color: '#495460',
                          formatter: function (w) {
                              return w.globals.seriesTotals.reduce((a, b) => {
                                  return a + b
                                }, 0) + '%'
                          }
                        }
                  },
              },
          }
      }
    },
    'donut-3': {
        series: [765.21, 765.21, 765.21, 765.21, 765.21, 765.21],
        chart: {
            type: 'donut',
            width: '100%',
            height: 310,
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        labels: ['Sale', 'Expenses', 'Revenue', 'Sale', 'Expenses', 'Revenue'],

        colors: ['#3F3CFF', '#0C1523', '#7F8995', '#B8C1CC', '#CBD2D9', '#EAEDF0'],
        stroke: {
            colors: 'transparent',
            lineCap: 'round',
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '80%',
                    labels: {
                        show: true,
                        name: {
                            offsetY: -20,
                            formatter: function (val) {
                              return val
                            }
                          },

                        value: {
                            show: true,
                            fontSize: '36px',
                            fontFamily: 'Inter',
                            fontWeight: 700,
                            color: '#0C1523',
                            offsetY: 10,
                            formatter: function (val) {
                                return val;
                            }
                        },
                        total: {
                            show: true,
                            label: 'Investment',
                            fontSize: '18px',
                            fontFamily: 'Inter',
                            fontWeight: 500,
                            color: '#7F8995',
                            formatter: function (w) {
                                return w.globals.seriesTotals.reduce((a, b) => {
                                    return a + b
                                  }, 0)
                            }
                          }
                    },
                },
            },
            stroke: {
                colors: undefined,
            },
        },
    },
    'donut-4': {
        series: [29098, 29098],
        chart: {
            type: 'donut',
            width: '100%',
            height: 250,
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        labels: ['Direct Sales', 'Affiliate Sales'],

        colors: ['#3F3CFF', '#CBD2D9'],
        stroke: {
            colors: 'transparent',
            lineCap: 'round',
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '80%',
                    labels: {
                        show: true,
                        name: {
                            offsetY: -14,
                            formatter: function (val) {
                              return val
                            }
                          },

                        value: {
                            show: true,
                            fontSize: '28px',
                            fontFamily: 'Inter',
                            fontWeight: 600,
                            color: '#0C1523',
                            offsetY: 3,
                            formatter: function (val) {
                                return '$' + val
                            }
                        },
                        total: {
                            show: true,
                            label: 'Total Sales',
                            fontSize: '12px',
                            fontFamily: 'Inter',
                            fontWeight: 400,
                            color: '#7F8995',
                            formatter: function (w) {
                                return '$' + w.globals.seriesTotals.reduce((a, b) => {
                                    return a + b
                                  }, 0)
                            }
                          }
                    },
                },
            },
            stroke: {
                colors: undefined,
            },
        },
    },
    'line-graph1': {
        series: [{
        name: 'Sales',
        data: [1, 5, 10, 8, 3, 6, 9]
      }],
        chart: {
        height: 350,
        type: 'area',
        toolbar: {
            show: false
        },
        parentHeightOffset: 0,
      },
      stroke: {
        width: 5,
        curve: 'smooth',
        colors: ["#3F3CFF"]
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'gradient',
        gradient: {
          type: 'horizontal',
          colorStops: [
            {
              offset: 0,
              color: "#FC6060",
              opacity: 0.1
            },
            {
              offset: 50,
              color: "#C160FC",
              opacity: 0.1
            },
            {
              offset: 100,
              color: "#7B60E8",
              opacity: 0.1
            },
            {
              offset: 150,
              color: "#3F3CFF",
              opacity: 0.1
            }
          ]
        },
      },
      markers: {
        strokeColors: '#0C1523',
        colors: '#ffffff',
        strokeWidth: 3,
      },
      tooltip: {
        theme: "dark",
        style: {
            fontSize: '12px',
            fontFamily: 'Inter'
        },
        x: {
            show: false
        },
        y: {
            formatter: undefined,
            title: {
                formatter: (seriesName) => seriesName.slice(0,0)
            },
        },
        marker: {
            show: false,
        }
      },
      yaxis: {
        min: 0,
        max: 10,
        tickAmount: 5,
        labels: {
          offsetX: -15,
            style: {
                colors: '#495460',
                fontSize: '14px',
                fontFamily: 'Inter',
                fontWeight: 500,
            },
            formatter: (value) => { return value + '.0' },
        },
      },
      xaxis: {
        type: 'category',
        categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        labels: {
          offsetY: 4,
            style: {
                colors: '#495460',
                fontSize: '14px',
                fontFamily: 'Inter',
                fontWeight: 500
            }
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      grid: {
        borderColor: "#F3F7FA",
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },  
      }
    },
    'line-graph2': {
        series: [{
        name: 'Sales',
        data: [8, 18, 31, 6, 27, 21, 17, 26]
      }],
        chart: {
        height: 350,
        type: 'area',
        toolbar: {
            show: false
        }
      },
      stroke: {
        width: 5,
        curve: 'straight',
        colors: ["#3F3CFF"]
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'gradient',
        gradient: {
          type: 'horizontal',
          colorStops: [
            {
              offset: 0,
              color: "#FC6060",
              opacity: 0.1
            },
            {
              offset: 50,
              color: "#C160FC",
              opacity: 0.1
            },
            {
              offset: 100,
              color: "#7B60E8",
              opacity: 0.1
            },
            {
              offset: 150,
              color: "#3F3CFF",
              opacity: 0.1
            }
          ]
        },
      },
      markers: {
        strokeColors: '#0C1523',
        colors: '#ffffff',
        strokeWidth: 3,
      },
      tooltip: {
        theme: "dark",
        style: {
            fontSize: '12px',
            fontFamily: 'Inter'
        },
        x: {
            show: false
        },
        y: {
            formatter: undefined,
            title: {
                formatter: (seriesName) => seriesName.slice(0,0)
            },
        },
        marker: {
            show: false,
        }
      },
      yaxis: {
        min: 0,
        max: 40,
        tickAmount: 4,
        labels: {
          offsetX: -15,
            style: {
                colors: '#7F8995',
                fontSize: '14px',
                fontFamily: 'Inter',
                fontWeight: 500,
            },
            formatter: (value) => { return value + 'K' },
        },
      },
      xaxis: {
        type: 'category',
        categories: ['Jan 1', 'Jan 15', 'Jan 20', 'Jan 30', 'Feb 3', 'Feb 10', 'Feb 20', 'Feb 28'],
        labels: {
          offsetY: 8,
            style: {
                colors: '#7F8995',
                fontSize: '14px',
                fontFamily: 'Inter',
                fontWeight: 500
            }
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      grid: {
        borderColor: "#F3F7FA",
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },
      }
    },
    'line-graph3': {
        series: [{
        name: 'Sales',
        data: [8, 18, 25, 6, 25, 21]
      }],
        chart: {
        height: 350,
        type: 'line',
        toolbar: {
            show: false
        }
      },
      stroke: {
        width: 5,
        curve: 'smooth',
        colors: ["#FC6060"]
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'gradient',
        gradient: {
          type: 'horizontal',
          colorStops: [
            {
              offset: 0,
              color: "#FC6060",
            },
            {
              offset: 50,
              color: "#C160FC",
            },
            {
              offset: 100,
              color: "#7B60E8",
            },
            {
              offset: 150,
              color: "#3F3CFF",
            }
          ]
        },
      },
      markers: {
        strokeColors: '#0C1523',
        colors: '#ffffff',
        strokeWidth: 3,
      },
      tooltip: {
        theme: "dark",
        style: {
            fontSize: '12px',
            fontFamily: 'Inter'
        },
        x: {
            show: false
        },
        y: {
            formatter: undefined,
            title: {
                formatter: (seriesName) => seriesName.slice(0,0)
            },
        },
        marker: {
            show: false,
        }
      },
      yaxis: {
        min: 0,
        max: 25,
        tickAmount: 5,
        labels: {
          offsetX: -15,
            style: {
                colors: '#7F8995',
                fontSize: '14px',
                fontFamily: 'Inter',
                fontWeight: 500,
            },
            formatter: (value) => { return `$${value}K` },
        },
      },
      xaxis: {
        type: 'category',
        categories: ['8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM'],
        labels: {
          offsetY: 8,
            style: {
                colors: '#7F8995',
                fontSize: '14px',
                fontFamily: 'Inter',
                fontWeight: 500
            }
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      grid: {
        borderColor: "#F3F7FA",
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }
      }
    },
    'line-graph4': {
        series: [
            {
                name: 'Sales',
                data: [8, 18, 25, 14, 25, 21]
            },
            {
                name: 'Sales',
                data: [7, 12, 8, 9, 2, 5]
            }
        ],
        chart: {
        height: 350,
        type: 'area',
        toolbar: {
            show: false
        }
      },
      legend: {
        show: false
      },
      stroke: {
        width: 3,
        curve: 'straight',
        colors: ["#3F3CFF", "#0C1523"]
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'gradient',
        gradient: {
          type: 'horizontal',
          colorStops: [
            {
              offset: 0,
              color: "#FC6060",
              opacity: 0.1
            },
            {
              offset: 50,
              color: "#C160FC",
              opacity: 0.1
            },
            {
              offset: 100,
              color: "#7B60E8",
              opacity: 0.1
            },
            {
              offset: 150,
              color: "#3F3CFF",
              opacity: 0.1
            }
          ]
        },
      },
      markers: {
        strokeColors: '#0C1523',
        colors: '#ffffff',
        strokeWidth: 3,
      },
      tooltip: {
        theme: "dark",
        style: {
            fontSize: '12px',
            fontFamily: 'Inter'
        },
        x: {
            show: false
        },
        y: {
            formatter: undefined,
            title: {
                formatter: (seriesName) => seriesName.slice(0,0)
            },
        },
        marker: {
            show: false,
        }
      },
      yaxis: {
        show: false,
        min: 0,
        max: 25,
        tickAmount: 5,
        labels: {
            style: {
                colors: '#7F8995',
                fontSize: '14px',
                fontFamily: 'Inter',
                fontWeight: 500,
            },
            formatter: (value) => { return `$${value}K` },
        },
      },
      xaxis: {
        show: false,
        type: 'category',
        categories: ['Jan', 'Feb', 'Mar', 'Apirl', 'May', 'Jun'],
        labels: {
          show: false
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      grid: {
        borderColor: "#F3F7FA",
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }
      }
    },

    'column-graph5': {
        series: [{
        name: 'Mobile Browser',
        data: [44, 55, 57, 56, 61, 58, 63]
      }, {
        name: 'Desktop',
        data: [76, 85, 100, 98, 87, 100, 91]
      }],
        chart: {
        type: 'bar',
        height: 350,
        toolbar: {
            show: false
        }
      },
      legend: {
        show: false
      },
      colors: ['#EAEDF0', '#C160FC'],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          borderRadius: 10,
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 5,
        colors: ['transparent']
      },
      xaxis: {
        show: true,
        type: 'category',
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        labels: {
            show: true,
            style: {
                colors: '#495460',
                fontSize: '12px',
                fontFamily: 'Inter',
                fontWeight: 500
            }
        },
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        }
      },
      yaxis: {
        show: false,
        min: 0,
        max: 100,
        labels: {
            style: {
                colors: '#7F8995',
                fontSize: '14px',
                fontFamily: 'Inter',
                fontWeight: 500,
            },
            formatter: (value) => { return `${value}%` },
        },
      },
      grid: {
          show: false,
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
      },
      tooltip: {
        theme: "dark",
        style: {
            fontSize: '12px',
            fontFamily: 'Inter'
        },
        x: {
            show: false
        },
        y: {
            formatter: undefined,
            title: {
                formatter: (seriesName) => seriesName.slice(0,0)
            },
        },
        marker: {
            show: false,
        }
      }
    },
    'area-graph6': {
      series: [{
      name: 'Sales',
      data: [1, 5, 10, 8, 3, 6]
    }],
      chart: {
      height: 350,
      type: 'area',
      toolbar: {
          show: false
      }
    },
    stroke: {
      width: 5,
      curve: 'smooth',
      colors: ["#3F3CFF"]
    },
    dataLabels: {
      enabled: false
    },
    fill: {
      type: 'gradient',
      gradient: {
        type: 'horizontal',
        colorStops: [
          {
            offset: 0,
            color: "#FC6060",
            opacity: 0.1
          },
          {
            offset: 50,
            color: "#C160FC",
            opacity: 0.1
          },
          {
            offset: 100,
            color: "#7B60E8",
            opacity: 0.1
          },
          {
            offset: 150,
            color: "#3F3CFF",
            opacity: 0.1
          }
        ]
      },
    },
    markers: {
      strokeColors: '#0C1523',
      colors: '#ffffff',
      strokeWidth: 3,
    },
    tooltip: {
      theme: "dark",
      style: {
          fontSize: '12px',
          fontFamily: 'Inter'
      },
      x: {
          show: false
      },
      y: {
          formatter: undefined,
          title: {
              formatter: (seriesName) => seriesName.slice(0,0)
          },
      },
      marker: {
          show: false,
      }
    },
    yaxis: {
      min: 0,
      max: 25,
      tickAmount: 5,
      labels: {
        offsetX: -15,
          style: {
              colors: '#7F8995',
              fontSize: '14px',
              fontFamily: 'Inter',
              fontWeight: 500,
          },
          formatter: (value) => { return `$${value}K` },
      },
    },
    xaxis: {
      type: 'category',
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',],
      labels: {
        offsetY: 5,
          style: {
              colors: '#7F8995',
              fontSize: '14px',
              fontFamily: 'Inter',
              fontWeight: 500
          }
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
    },
    grid: {
      borderColor: "#F3F7FA"
    }
  },
  'bar-graph7': {
    series: [{
    data: [100, 70, 45, 90]
  }],
    chart: {
    type: 'bar',
    height: 350,
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      barHeight: '100%',
      distributed: true,
      horizontal: true,
      dataLabels: {
        position: 'bottom'
      },
    }
  },
  colors: ['#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B', '#2b908f', '#f9a3a4', '#90ee7e',
    '#f48024', '#69d2e7'
  ],
  dataLabels: {
    enabled: true,
    textAnchor: 'start',
    style: {
      colors: ['#fff']
    },
    formatter: function (val, opt) {
      return opt.w.globals.labels[opt.dataPointIndex]
    },
    offsetX: 0,
    dropShadow: {
      enabled: true
    }
  },
  stroke: {
    width: 1,
    colors: ['#fff']
  },
  xaxis: {
    categories: ['/Email marketing', '/Project management', '/Team working', '/Planning'],
  },
  yaxis: {
    labels: {
      show: false
    }
  },
  title: {
      text: 'Custom DataLabels',
      align: 'center',
      floating: true
  },
  subtitle: {
      text: 'Category Names as DataLabels inside bars',
      align: 'center',
  },
  tooltip: {
    theme: 'dark',
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function () {
          return ''
        }
      }
    }
  }
  },
  'area-graph8': {
    series: [{
    name: 'Sales',
    data: [0, 0, 0, 0, 0, 0, 24, 24, 0, 0, 24, 0]
  }],
    chart: {
    height: 350,
    type: 'area',
    toolbar: {
        show: false
    }
  },
  stroke: {
    width: 5,
    curve: 'straight',
    colors: ["#3F3CFF"]
  },
  dataLabels: {
    enabled: false
  },
  fill: {
    type: 'gradient',
    gradient: {
      type: 'horizontal',
      colorStops: [
        {
          offset: 0,
          color: "#FC6060",
          opacity: 0.1
        },
        {
          offset: 50,
          color: "#C160FC",
          opacity: 0.1
        },
        {
          offset: 100,
          color: "#7B60E8",
          opacity: 0.1
        },
        {
          offset: 150,
          color: "#3F3CFF",
          opacity: 0.1
        }
      ]
    },
  },
  markers: {
    strokeColors: '#0C1523',
    colors: '#ffffff',
    strokeWidth: 3,
  },
  tooltip: {
    theme: "dark",
    style: {
        fontSize: '12px',
        fontFamily: 'Inter'
    },
    x: {
        show: false
    },
    y: {
        formatter: undefined,
        title: {
            formatter: (seriesName) => seriesName.slice(0,0)
        },
    },
    marker: {
        show: false,
    }
  },
  yaxis: {
    min: 0,
    max: 25,
    tickAmount: 5,
    show: false,
    labels: {
        style: {
            colors: '#7F8995',
            fontSize: '14px',
            fontFamily: 'Inter',
            fontWeight: 500,
        },
        formatter: (value) => { return `${value}` },
    },
  },
  xaxis: {
    type: 'category',
    categories: ['Jan 1', 'Jan 15', 'Jan 20', 'Jan 30', 'Jan 3', 'Jan 10', 'Jan 20', 'Jan 28', 'Jan 20', 'Jan 28', 'Jan 20', 'Jan 28'],
    labels: {
      offsetY: 6,
        style: {
            colors: '#7F8995',
            fontSize: '14px',
            fontFamily: 'Inter',
            fontWeight: 500
        }
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
  },
  grid: {
    show: false,
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  }
},
'area-graph9': {
  series: [{
  name: 'Sales',
  data: [100, 200, 200, 600, 800, 800, 900, 600 ,400 ,200 ,500 ,600]
}],
  chart: {
  height: 350,
  type: 'area',
  toolbar: {
      show: false
  }
},
stroke: {
  width: 5,
  curve: 'smooth',
  colors: ["#3F3CFF"]
},
dataLabels: {
  enabled: false
},
fill: {
  type: 'gradient',
  gradient: {
    type: 'horizontal',
    colorStops: [
      {
        offset: 0,
        color: "#FC6060",
        opacity: 0.1
      },
      {
        offset: 50,
        color: "#C160FC",
        opacity: 0.1
      },
      {
        offset: 100,
        color: "#7B60E8",
        opacity: 0.1
      },
      {
        offset: 150,
        color: "#3F3CFF",
        opacity: 0.1
      }
    ]
  },
},
markers: {
  strokeColors: '#0C1523',
  colors: '#ffffff',
  strokeWidth: 3,
},
tooltip: {
  theme: "dark",
  style: {
      fontSize: '12px',
      fontFamily: 'Inter'
  },
  x: {
      show: false
  },
  y: {
      formatter: undefined,
      title: {
          formatter: (seriesName) => seriesName.slice(0,0)
      },
  },
  marker: {
      show: false,
  }
},
yaxis: {
  min: 0,
  max: 1000,
  tickAmount: 5,
  labels: {
    offsetX: -15,
      style: {
          colors: '#7F8995',
          fontSize: '14px',
          fontFamily: 'Inter',
          fontWeight: 500,
      },
      formatter: (value) => { return `${value}.00` },
  },
},
xaxis: {
  type: 'category',
  categories: ['1','2','3','4','5','6','7','8','9','10','11','12'],
  labels: {
    offsetY: 3,
      style: {
          colors: '#7F8995',
          fontSize: '14px',
          fontFamily: 'Inter',
          fontWeight: 500
      }
  },
  axisBorder: {
    show: false
  },
  axisTicks: {
    show: false
  },
},
grid: {
  borderColor: "#F3F7FA",
  padding: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }
}
},
'bar-graph10': {
  series: [{
  name: 'PRODUCT A',
  data: [44, 55, 41, 67, 22, 43, 37, 11, 34]
}, {
  name: 'PRODUCT B',
  data: [13, 23, 20, 8, 13, 27, 37, 11, 34]
}],
  chart: {
  type: 'bar',
  height: 350,
  stacked: true,
  toolbar: {
    show: false
  },
},
dataLabels: {
  enabled: false
},
colors: ["#B8C1CC", "#3F3CFF"],
plotOptions: {
  bar: {
    horizontal: false,
    borderRadius: 10,
  },
},
tooltip: {
  theme: "dark",
  style: {
      fontSize: '12px',
      fontFamily: 'Inter'
  },
  x: {
      show: false
  },
  y: {
      formatter: undefined,
      title: {
          formatter: (seriesName) => seriesName
      },
  },
  marker: {
      show: false,
  }
},
xaxis: {
  show: false,
  labels: {
    show: false
  },
  axisBorder: {
    show: false
  },
  axisTicks: {
    show: false
  }
},
yaxis: {
  show: false
},
legend: {
  show: false
},
grid: {
  borderColor: "#F3F7FA",
  padding: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },  
}
},
'line-graph11': {
  series: [{
  name: 'Sales',
  data: [1, 5, 7, 3, 8, 4]
}],
  chart: {
  height: 350,
  type: 'line',
  toolbar: {
      show: false
  }
},
stroke: {
  width: 3,
  curve: 'straight',
  colors: ["#FC6060"]
},
dataLabels: {
  enabled: false
},
fill: {
  type: 'gradient',
  gradient: {
    type: 'horizontal',
    colorStops: [
      {
        offset: 0,
        color: "#FC6060",
      },
      {
        offset: 50,
        color: "#C160FC",
      },
      {
        offset: 100,
        color: "#7B60E8",
      },
      {
        offset: 150,
        color: "#3F3CFF",
      }
    ]
  },
},
markers: {
  strokeColors: '#0C1523',
  colors: '#ffffff',
  strokeWidth: 3,
  size: [8]
},
tooltip: {
  theme: "dark",
  style: {
      fontSize: '12px',
      fontFamily: 'Inter'
  },
  x: {
      show: false
  },
  y: {
      formatter: undefined,
      title: {
          formatter: (seriesName) => seriesName.slice(0,0)
      },
  },
  marker: {
      show: false,
  }
},
yaxis: {
  min: 0,
  max: 8,
  tickAmount: 4,
  labels: {
    offsetX: -15,
      style: {
          colors: '#7F8995',
          fontSize: '12px',
          fontFamily: 'Inter',
          fontWeight: 500,
      },
      formatter: (value) => { return `${value}.0` },
  },
},
xaxis: {
  type: 'category',
  categories: ['2018', '2019', '2020', '2021', '2022', '2023'],
  labels: {
    offsetY: 4,
      style: {
          colors: '#7F8995',
          fontSize: '12px',
          fontFamily: 'Inter',
          fontWeight: 500
      }
  },
  axisBorder: {
    show: false
  },
  axisTicks: {
    show: false
  }
},
grid: {
  borderColor: "#F3F7FA",
  padding: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },  
}
},

'bar-graph12':{
  series: [{
    name: 'Net Profit',
    data: [44, 55, 57, 56, 61, 58]
  }],
    chart: {
    type: 'bar',
    height: 350,
    toolbar: {
      show: false
    }
  },
  colors: ["#3F3CFF"],
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      borderRadius: 10
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    type: 'category',
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    labels: {
      offsetY: 3,
      style: {
          colors: '#495460',
          fontSize: '14px',
          fontFamily: 'Inter',
          fontWeight: 500
      }
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  yaxis: {
    show: false
  },
  grid: {
    borderColor: "#F3F7FA",
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },  
  }
},

"bar-graph13":{
  series: [
    {
      name: 'serie1',
      data: [23400, 15000, 20000, 22000, 10000, 23400, 5000]
    },
  ],
  chart: {
    height: 350,
    type: 'bar',
    stacked: true,
    toolbar: {
      show: false
    }
  },
  stroke: {
    width: 6,
    colors: ['#fff']
  },
  colors: ['#3F3CFF'],
  dataLabels: {
    enabled: false,
    position: 'top',
    style: {
      colors: ['#000']
    }
  },
  plotOptions: {
    bar: {
      horizontal: true,
      borderRadius: 14,
    }
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    labels: {
      show: false,
      style: {
          colors: '#495460',
          fontSize: '14px',
          fontFamily: 'Inter',
          fontWeight: 500
      }
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  yaxis: {
    min: 0,
    max: 25000,
    labels: {
        style: {
            colors: '#7F8995',
            fontSize: '14px',
            fontFamily: 'Inter',
            fontWeight: 500,
        },
        formatter: (value) => { return value },
    },
  },
  grid: {
    show: false,
    borderColor: "#F3F7FA", 
  }
},

'area-graph14': {
  series: [{
  name: 'Sales',
  data: [30, 20, 26, 21, 38, 21]
}],
  chart: {
  height: 350,
  type: 'area',
  toolbar: {
      show: false
  }
},
stroke: {
  width: 3,
  curve: 'straight',
  colors: ["#FC6060"]
},
dataLabels: {
  enabled: false
},
fill: {
  type: 'gradient',
  gradient: {
    type: 'horizontal',
    colorStops: [
      {
        offset: 0,
        color: "#FC6060",
        opacity: 0.1
      },
      {
        offset: 50,
        color: "#C160FC",
        opacity: 0.1
      },
      {
        offset: 100,
        color: "#7B60E8",
        opacity: 0.1
      },
      {
        offset: 150,
        color: "#3F3CFF",
        opacity: 0.1
      }
    ]
  },
},
markers: {
  strokeColors: '#0C1523',
  colors: '#ffffff',
  strokeWidth: 3,
  size: [6]
},
tooltip: {
  theme: "dark",
  style: {
      fontSize: '12px',
      fontFamily: 'Inter'
  },
  x: {
      show: false
  },
  y: {
      formatter: undefined,
      title: {
          formatter: (seriesName) => seriesName
      },
  },
  marker: {
      show: false,
  }
},
yaxis: {
  min: 0,
  max: 100,
  tickAmount: 5,
  labels: {
    offsetX: -15,
      style: {
          colors: '#7F8995',
          fontSize: '14px',
          fontFamily: 'Inter',
          fontWeight: 500,
      },
      formatter: (value) => { return `${value}` },
  },
},
xaxis: {
  type: 'category',
  categories: ['10am', '11am', '12am', '1am', '2am', '3am'],
  labels: {
    offsetY: 3,
      style: {
          colors: '#7F8995',
          fontSize: '14px',
          fontFamily: 'Inter',
          fontWeight: 500
      }
  },
  axisBorder: {
    show: false
  },
  axisTicks: {
    show: false
  }
},
grid: {
  show: false,
  padding: {
    left:0,
    right:0,
    top: 0,
    bottom: 0,
  }, 
}
},

"bar-graph15":{
  series: [
    {
      name: 'serie1',
      data: [23400, 15000, 20000, 22000, 10000]
    },
  ],
  chart: {
    height: 350,
    type: 'bar',
    stacked: true,
    toolbar: {
      show: false
    }
  },
  stroke: {
    width: 12,
    colors: ['#fff']
  },
  colors: ['#FFBB29'],
  dataLabels: {
    enabled: false,
    position: 'top',
    style: {
      colors: ['#000']
    }
  },
  plotOptions: {
    bar: {
      horizontal: true,
    }
  },
  xaxis: {
    categories: ['Exellent', 'Very good', 'Average', 'Poor', 'Terrible'],
    labels: {
      show: false,
      style: {
          colors: '#495460',
          fontSize: '14px',
          fontFamily: 'Inter',
          fontWeight: 500
      }
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  yaxis: {
    min: 0,
    max: 25000,
    labels: {
        style: {
            colors: '#495460',
            fontSize: '14px',
            fontFamily: 'Inter',
            fontWeight: 500,
        },
        formatter: (value) => { return value },
    },
  },
  grid: {
    show: false,
    padding: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    }
  },
  tooltip: {
    theme: "dark",
    style: {
        fontSize: '12px',
        fontFamily: 'Inter'
    },
    x: {
        show: false
    },
    y: {
        formatter: undefined,
        title: {
            formatter: (seriesName) => seriesName.slice(0,0)
        },
    },
    marker: {
        show: false,
    }
  }
},

}

const renderedCharts = [];
function updateCharts() {
    if (typeof ApexCharts !== 'function') {
        return;
    }

    const chartElements = document.querySelectorAll('.chart');

    chartElements.forEach((chartElement) => {
        if (renderedCharts.includes(chartElement)) {
            return;
        }

        const type = chartElement.getAttribute('data-type');
        const variant = chartElement.getAttribute('data-variant');

        if (typeof demoOptions[type] === 'object') {
            let options = demoOptions[type];

            if (typeof options['__variants'] === 'object' && typeof options['__variants'][variant] === 'object') {
                options = { ...options, ...options['__variants'][variant] };
            }

            const chart = new ApexCharts(chartElement, options);
            chart.render();
            renderedCharts.push(chartElement);
        }
    });
}

updateCharts();
