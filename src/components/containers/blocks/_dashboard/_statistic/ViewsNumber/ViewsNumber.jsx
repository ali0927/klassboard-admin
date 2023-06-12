import * as React from "react";
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';
import "./ViewsNumber.scss";

class ViewsNumberComponent extends React.Component {
	static translate;
	static i18n;
	constructor(props) {
		super(props);
		this.$t  = this.props.t;
		this.i18n = this.props.i18n;
		this.dinamic = this.props.statistic.dinamic;
		this.data = [
			{
				name: 'Mon.', percent: this.props.statistic.mon,
			},
			{
				name: 'Tue.', percent: this.props.statistic.tue,
			},
			{
				name: 'Wed.', percent: this.props.statistic.wed
			},
			{
				name: 'Thu.', percent: this.props.statistic.thu,
			},
			{
				name: 'Fri.', percent: this.props.statistic.fri,
			},
		];
		this.count = this.props.statistic.count;
	}
	render() {
		let dinamicText = this.$t("+ {{views}}% views", {views: this.dinamic});
		if(this.dinamic < 0){
			dinamicText = this.$t("{{views}}% views", {views: this.dinamic});
		}
		return (
			<div className="views-number">
				<div className="views-number__top-block">
					<div className="views-number__left">
						<div className="views-number__h1">{this.$t("Views number")}</div>
						<div className="views-number__h2">{this.count}</div>
					</div>
					<div className="views-number__right">
						{dinamicText}
					</div>
				</div>

				<div className="views-number__charts">
					<AreaChart
						width={320}
						height={150}
						data={this.data}
						margin={{
							top: 10, right: 0, left: 0, bottom: 0,
						}}
					>
						<XAxis padding={{ left: 20, right: 20 }} dataKey="name" axisLine={false} tickLine={false} />
						<Tooltip />
						<Area activeDot={{fill: '#8f63de', stroke: '#fff', strokeWidth: 16 }} baseLine={10} type="monotone" dataKey="percent" strokeWidth="6px" stroke="#8f63de" fill="#cbbee2" />
					</AreaChart>
				</div>
			</div>
		);
	}
}
ViewsNumberComponent.propTypes = {
	statistic: PropTypes.object.isRequired,
}
export const ViewsNumber = withTranslation()(ViewsNumberComponent)