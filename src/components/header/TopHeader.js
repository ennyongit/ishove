const TopHeader = () => {
    return (	
				<div className="header-top style4">
					<div className="container">
						<div className="row">
							<div className="col-md-4">
								<ul className="flat-support style1">
									<li>
									<a href="faq.html" title="">Support</a>
								</li>
								<li>
									<a href="store-location.html" title="">Store Locator</a>
								</li>
								<li>
									<a href="order-tracking.html" title="">Track Your Order</a>
								</li>
								</ul> {/**flat-support */}
							</div> {/**col-md-4 */}
							<div className="col-md-4">
							</div>{/**col-md-4 */}
							<div className="col-md-4">
								<ul className="flat-unstyled style2">
									<li className="account">
										<a href="#" title="">My Account<i className="fa fa-angle-down" aria-hidden="true"></i></a>
										<ul className="unstyled">
											<li>
											<a href="#" title="">Login</a>
										</li>
										<li>
											<a href="wishlist.html" title="">Wishlist</a>
										</li>
										<li>
											<a href="shop-cart.html" title="">My Cart</a>
										</li>
										<li>
											<a href="my-account.html" title="">My Account</a>
										</li>
										<li>
											<a href="shop-checkout.html" title="">Checkout</a>
										</li>
										</ul>
									</li>
									<li>
										<a href="#" title="">USD<i className="fa fa-angle-down" aria-hidden="true"></i></a>
										<ul className="unstyled">
											<li>
												<a href="#" title="">Euro</a>
											</li>
											<li>
												<a href="#" title="">Dolar</a>
											</li>
										</ul>
									</li>
									<li>
										<a href="#" title="">English<i className="fa fa-angle-down" aria-hidden="true"></i></a>
										<ul className="unstyled">
											<li>
											<a href="#" title="">Turkish</a>
										</li>
										<li>
											<a href="#" title="">English</a>
										</li>
										<li>
											<a href="#" title="">اللغة العربية</a>
										</li>
										<li>
											<a href="#" title="">Español</a>
										</li>
										<li>
											<a href="#" title="">Italiano</a>
										</li>
										</ul>
									</li>
								</ul> {/**flat-unstyled */}
							</div> {/**col-md-4 */}
						</div>{/**row */}
					</div>{/**container */}
				</div> 
    )
}

export default TopHeader; 