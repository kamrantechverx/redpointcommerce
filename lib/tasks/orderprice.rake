  desc "Rake Tasks"
  task task_order: :environment do
    
    daily  = Spree::LineItem.where("subs_type = ?", 'daily')
   
    daily.each do |f|
       o  = Spree::Order.find(f.order_id)
        orderid = o.id
        amount = (o.total)*100
        order_number = o.number
        curnc = o.currency
        bill_address = o.bill_address_id
        subsc_type = f.subs_type
        user = o.user_id
        item_price = o.item_total
        ship_address = o.ship_address_id
        items = o.item_count
        store = o.store_id
        
       
      var  =  o.credit_cards.last.gateway_customer_profile_id

       require "stripe"
      Stripe.api_key = "sk_test_je98XVAYSwxGfKKvXQrIhsas"
      

       if var.include?("cus")
        stripe_customer = Stripe::Customer.retrieve(var)
        charge = Stripe::Charge.create(:amount => amount.to_i , :currency => 'usd', :customer => stripe_customer )
      
        transction = Spree::SubscritionTransctions.new
        transction.order_id = orderid
        transction.price = amount
        transction.currency = curnc
        transction.subs_type =  subsc_type
        transction.user_id =  user
        transction.ref_number =  order_number
        transction.item_price = item_price
        transction.bill_address_id =  bill_address
        transction.ship_address_id = ship_address
        transction.item_count = items
        transction.store_id = store
        transction.save

       else

       end
    end
    
  end
  
  

  task task_weekly: :environment do
     weekly = Spree::LineItem.where("subs_type = ?", 'weekly')
    weekly.each do |f|
         o  = Spree::Order.find(f.order_id)
        orderid = o.id
        amount = (o.total)*100
        order_number = o.number
        curnc = o.currency
        bill_address = o.bill_address_id
        subsc_type = f.subs_type
        user = o.user_id
        item_price = o.item_total
        ship_address = o.ship_address_id
        items = o.item_count
        store = o.store_id
       
      var  =  o.credit_cards.last.gateway_customer_profile_id

      if var.include?("cus")

        Stripe.api_key = "sk_test_je98XVAYSwxGfKKvXQrIhsas"
        stripe_customer = Stripe::Customer.retrieve(var)
        charge = Stripe::Charge.create(:amount => amount.to_i , :currency => 'usd', :customer => stripe_customer )
        transction = Spree::SubscritionTransctions.new
        transction.order_id = orderid
        transction.price = amount
        transction.currency = curnc
        transction.subs_type =  subsc_type
        transction.user_id =  user
        transction.ref_number =  order_number
        transction.item_price = item_price
        transction.bill_address_id =  bill_address
        transction.ship_address_id = ship_address
        transction.item_count = items
        transction.store_id = store
         transction.save
       else
       end
      
  
     
    end
  end
  
  
  
  task task_monthly: :environment do
  monthly= Spree::LineItem.where("subs_type = ?", 'monthly')
    
    monthly.each do |f|
       o  = Spree::Order.find(f.order_id)
        orderid = o.id
        amount = (o.total)*100
        order_number = o.number
        curnc = o.currency
        bill_address = o.bill_address_id
        subsc_type = f.subs_type
        user = o.user_id
        item_price = o.item_total
        ship_address = o.ship_address_id
        items = o.item_count
        store = o.store_id
       
      var  =  o.credit_cards.last.gateway_customer_profile_id
        
        if var.include?("cus")
     
        Stripe.api_key = "sk_test_je98XVAYSwxGfKKvXQrIhsas"
        stripe_customer = Stripe::Customer.retrieve(var)
        charge = Stripe::Charge.create(:amount => amount.to_i , :currency => 'usd', :customer => stripe_customer )
      transction = Spree::SubscritionTransctions.new
        transction.order_id = orderid
        transction.price = amount
        transction.currency = curnc
        transction.subs_type =  subsc_type
        transction.user_id =  user
        transction.ref_number =  order_number
        transction.item_price = item_price
        transction.bill_address_id =  bill_address
        transction.ship_address_id = ship_address
        transction.item_count = items
        transction.store_id = store
         transction.save
       else
       end
    end
  end
  
  task task_yearly: :environment do
   yearly = Spree::LineItem.where("subs_type = ?", 'yearly')
    yearly.each do |f|
        o  = Spree::Order.find(f.order_id)
        orderid = o.id
        amount = (o.total)*100
        order_number = o.number
        curnc = o.currency
        bill_address = o.bill_address_id
        subsc_type = f.subs_type
        user = o.user_id
        item_price = o.item_total
        ship_address = o.ship_address_id
        items = o.item_count
        store = o.store_id
        
       
      var  =  o.credit_cards.last.gateway_customer_profile_id
      if var.include?("cus")
   
        Stripe.api_key = "sk_test_je98XVAYSwxGfKKvXQrIhsas"
        stripe_customer = Stripe::Customer.retrieve(var)
        charge = Stripe::Charge.create(:amount => amount.to_i , :currency => 'usd', :customer => stripe_customer )
     
        transction = Spree::SubscritionTransctions.new
        transction.order_id = orderid
        transction.price = amount
        transction.currency = curnc
        transction.subs_type =  subsc_type
        transction.user_id =  user
        transction.ref_number =  order_number
        transction.item_price = item_price
        transction.bill_address_id =  bill_address
        transction.ship_address_id = ship_address
        transction.item_count = items
        transction.store_id = store
         transction.save
       else
       end
    end
  end
  
  
