const React = require('react')

class Product extends React.Component {
  render() {
    return (
      <div className={this.props.name}>
        <p>{this.props.name}</p>
        <p>{this.props.producer}</p>

      </div>
    )
  }
}

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(
    ['white', 'eggshell-white', 'salmon']
  ).isRequired,
  weight: (props, propName) => {
    if (!(props[propName] > 80 && props[propName] < 300)){
      return new console.error('You didn\'t do it right lol');
    }
  }
}

Product.defaultProps = {
  hasWatermark: false
}

module.exports = Product
