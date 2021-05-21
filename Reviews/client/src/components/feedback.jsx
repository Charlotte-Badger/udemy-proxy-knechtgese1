import React from 'react';

class Feedback extends React.Component {
  constructor(props) {
    // console.log('Props in Feedback:', props);
    super(props);
    this.filterByTier = this.filterByTier.bind(this);
    this.removeFilter = this.removeFilter.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.select = React.createRef();
  }

  getPercentage(tier1 = 0, tier2 = 0) {
    let percentage = (tier1 + tier2) / this.props.ratings.totalRatings * 100;
    if (0 < percentage && percentage < 1) {
      return '< 1%';
    }
    return Math.round(percentage) + '%';
  }

  handleClick(tier) {
    this.filterByTier(tier);
    this.select.current.value = tier.toString();
  }

  handleSelect(e) {
    this.filterByTier(Number(e.target.value));
  }

  filterByTier(tier) {
    if (!this.props.currentSearchTerm) {
      this.props.setReviewsFilteredByTier(tier);
    } else {
      this.props.setReviewsFilteredBySearchAndTier(this.props.currentSearchTerm, tier);
    }
  }

  removeFilter() {
    this.props.setReviewsFilteredByTier(0);
    this.select.current.value = '0';
  }

  // TO DO
  // if a percentage is 0%, render it gray and unclickable
  render() {
    if (this.props.ratings.totalRatings === 0) {
      return (
        <div>
          <h2>Student feedback</h2>
          <div>This course doesn't have any ratings yet.</div>
        </div>
      );
    } else {
      const tiers = [
        ['5'], ['4 1/2', '4'], ['3 1/2', '3'], ['2 1/2', '2'], ['1 1/2', '1']
      ];

      return (
        <div>
          <h2>Student feedback</h2>
          <div>{this.props.ratings.overallRating.toFixed(1)} Course Rating</div>

          {tiers.map((tier) => {
            let percentage;
            tier.length === 1 ?
              percentage = this.getPercentage(this.props.ratings[tier[0]]) :
              percentage = this.getPercentage(this.props.ratings[tier[0]], this.props.ratings[tier[1]]);
            return (
              <div key={tier[tier.length - 1]}>
                <div id={tier[tier.length - 1] + 'stars'} onClick={
                  () => percentage === '0%' ? null : this.handleClick(Number(tier[tier.length - 1]))
                }>
                  {tier[tier.length - 1]} {tier[tier.length - 1] === '1' ? 'star' : 'stars'}: {percentage}
                </div>
                <div>
                  {this.props.currentTier === Number(tier[tier.length - 1]) ? <button onClick={this.removeFilter}>X</button> : null}
                </div>
              </div>
            );
          })}

          <select ref={this.select} id="select" onChange={this.handleSelect}>
            <option value="0">All ratings</option>
            <option value="5">Five stars</option>
            <option value="4">Four stars</option>
            <option value="3">Three stars</option>
            <option value="2">Two stars</option>
            <option value="1">One star</option>
          </select>
        </div>
      );
    }
  }
}



export default Feedback;