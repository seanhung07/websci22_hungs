import { Component, OnInit } from '@angular/core';
import { ApiService } from '.././services/api.service';
import * as d3 from 'd3';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  private data =   [ 
  {"Framework":"Positive","Stars":632},
];
  private svg: any;
  private margin = 50;
  private width = 750;
  private height = 600;
  // The radius of the pie chart is half the smallest side
  private radius = Math.min(this.width, this.height) / 2 - this.margin;
  private colors: any;

  constructor(private api: ApiService, private http: HttpClient) { }

  ngOnInit(): void {
    // this.getdata()
    this.createSvg()
    this.createColors()
    d3.json('http://localhost:3000/data').then((data: any) => this.drawChart(data));
    // this.drawChart()
  }
  private createSvg(): void {
    this.svg = d3.select("figure#pie")
    .append("svg")
    .attr("width", this.width)
    .attr("height", this.height)
    .append("g")
    .attr(
      "transform",
      "translate(" + this.width / 2 + "," + this.height / 2 + ")"
    );
}
// getdata(){
//   d3.json('http://localhost:3000/data') .then((data) => {
//     // Use data
//     // console.log(data)
//     // this.data = data
// })
//   this.http.get<any[]>("http://localhost:3000/data").subscribe(
//     res => {
//       // console.log(res)
//       // this.data = res
      
//     }
//   )
// }
private createColors(): void {
  this.colors = d3.scaleOrdinal()
  .domain(this.data.map(d => d.Stars.toString()))
  .range(["#c7d3ec", "#a5b8db", "#879cc4", "#677795", "#5a6782"]);
}
private drawChart(data: any[]): void {
  // Compute the position of each group on the pie:
  const pie = d3.pie<any>().value((d: any) => Number(d.Stars));

  // Build the pie chart
  this.svg
  .selectAll('pieces')
  .data(pie(data))
  .enter()
  .append('path')
  .attr('d', d3.arc()
    .innerRadius(0)
    .outerRadius(this.radius)
  )
  .attr('fill', (d: any, i: any) => (this.colors(i)))
  .attr("stroke", "#121926")
  .style("stroke-width", "1px");

  // Add labels
  const labelLocation = d3.arc()
  .innerRadius(100)
  .outerRadius(this.radius);

  this.svg
  .selectAll('pieces')
  .data(pie(data))
  .enter()
  .append('text')
  .text((d: any) => d.data.Framework)
  .attr("transform", (d: any) => "translate(" + labelLocation.centroid(d) + ")")
  .style("text-anchor", "middle")
  .style("font-size", 15);
}


}
