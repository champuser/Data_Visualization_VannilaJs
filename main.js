// chart options

const options = {
    chart:{
        height:500,
        width:'100%',
        type:'bar',
        background:'#f4f4f4',
        foreColor:'#333'
    },
    series:[{
        name:"population",
        data:[
            8550405,
            3971883,
            2720546,
            2296224,
            1567442,
            1563025,
            1469845,
            1394928,
            1300092,
            1026908
        ]
    }],
    xaxis:{
        categories:[
            "Mumbai",
            "Delhi",
            "Banglore",
            "Hyderabad",
            "Ahmedabad",
            "Chennai",
            "Kolkata",
            "Surat",
            "Pune",
            "Jaipur",
            "Lucknow"
        ]
    },
    plotOptions:{
        bar:{
            horizontal:false
        }
    },
    fill:{
        colors:'#f44336'
    },
    dataLabels:{
        enabled:false
    },
    title:{
        text:'Largest Indian Cities By Population',
        align:'center',
        margin:30,
        offSet: 30,
        style:{
            fontSize:'30px'
        }


    }
};

// Initialize chart

const chart = new ApexCharts(document.querySelector("#chart"),options);

// Render chart

chart.render();

// Event Method ----> clicking the horizontal button the chart will show horizontally

document.querySelector('button').addEventListener('click',()=>{
    chart.updateOptions({
        plotOptions:{
            bar:{
                horizontal:true
            }
        }

    })
})
