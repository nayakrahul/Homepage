import React from 'react';
import './ContactSection.scss';


class Icon extends React.Component {
	render() {
		var item = this.props.itemProp;
		return (
			<a href={item.url} className="btn btn-link" target="_blank">
				<i className={item.icon}></i>
			</a>
		);
	}
}


class SocialMedia extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      socialMedias: [
      	{
          'url': 'https:\//twitter.com/SibylSytem',
          'icon': 'fa fa-twitter fa-lg'
      	},
      	{
          'url': 'https:\//instagram.com/___rahul.nayak___/',
          'icon': 'fa fa-instagram fa-lg'
      	},
      	{
          'url': 'https:\//www.linkedin.com/in/rahulnayak114',
          'icon': 'fa fa-linkedin fa-lg'
      	},
      	{
          'url': 'https:\//github.com/nayakrahul',
          'icon': 'fa fa-github fa-lg'
      	},
      	{
          'url': 'https://www.reddit.com/user/rahul12538',
          'icon': 'fa fa-reddit fa-lg'
      	},
      	{
          'url': 'https:\//medium.com/@booyakarahul',
          'icon': 'fa fa-medium fa-lg'
      	},
      ],
    }
 	};

  render() {
  	var items1 = this.state.socialMedias.slice(0,3);
    var itemsList1 = items1.map((item, index) =>
	    									<li className="grow" key={index}>
													<Icon itemProp={item}/>
												</li>
											);
    var items2 = this.state.socialMedias.slice(3);
    var itemsList2 = items2.map((item, index) =>
	    									<li className="grow" key={index}>
													<Icon itemProp={item}/>
												</li>
											);
    return (
      <div className="row">
				<div className="social-icons text-center">
					<div className="animated animatedFadeInUp fadeInUp" style={{animationDelay: '0.4s'}}>
						<ul className="list-inline list-social">
							{itemsList1}
						</ul>
					</div>
					<div className="animated animatedFadeInUp fadeInUp"style={{animationDelay: '0.6s'}}>
						<ul className="list-inline list-social">
							{itemsList2}
						</ul>
					</div>
				</div>
			</div>
    );
  }
}

export default SocialMedia;
